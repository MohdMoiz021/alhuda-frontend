import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import Dropdown from '../../components/Dropdown';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useEffect, useState } from 'react';
import IconPencilPaper from '../../components/Icon/IconPencilPaper';
import IconCoffee from '../../components/Icon/IconCoffee';
import IconCalendar from '../../components/Icon/IconCalendar';
import IconMapPin from '../../components/Icon/IconMapPin';
import IconMail from '../../components/Icon/IconMail';
import IconPhone from '../../components/Icon/IconPhone';
import IconTwitter from '../../components/Icon/IconTwitter';
import IconDribbble from '../../components/Icon/IconDribbble';
import IconGithub from '../../components/Icon/IconGithub';
import IconShoppingBag from '../../components/Icon/IconShoppingBag';
import IconTag from '../../components/Icon/IconTag';
import IconCreditCard from '../../components/Icon/IconCreditCard';
import IconClock from '../../components/Icon/IconClock';
import IconHorizontalDots from '../../components/Icon/IconHorizontalDots';
import IconUser from '../../components/Icon/IconUser';
import axios from 'axios';
import Swal from 'sweetalert2';

// Define User Type
interface UserProfile {
    id: string;
    name: string;
    email: string;
    role: string;
    is_active: boolean;
    created_at: string;
    phone?: string;
    location?: string;
    job_title?: string;
    bio?: string;
    twitter_url?: string;
    dribbble_url?: string;
    github_url?: string;
    profile_image?: string;
}

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        income: 92600,
        profit: 37515,
        expenses: 55085,
        planUsage: 65
    });

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

    useEffect(() => {
        dispatch(setPageTitle('Profile'));
        fetchUserProfile();
    }, [dispatch]);

    // Fetch user profile from localStorage first, then from API
    const fetchUserProfile = async () => {
        try {
            // First check localStorage
            const storedUser = localStorage.getItem('user');
            const token = localStorage.getItem('authToken');

            if (storedUser && token) {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
                
                // Optional: Fetch updated profile from API
                try {
                    const response = await axios.get('http://localhost:5000/api/auth/profile', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    if (response.data.user) {
                        setUser(response.data.user);
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                    }
                } catch (apiError) {
                    console.log('Using cached user data');
                }
            } else {
                // No user found, redirect to login
                Swal.fire({
                    icon: 'warning',
                    title: 'Session Expired',
                    text: 'Please login to view your profile',
                    confirmButtonColor: '#4361ee'
                }).then(() => {
                    navigate('/auth/boxed-signin');
                });
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to load profile. Please try again.',
                confirmButtonColor: '#4361ee'
            });
        } finally {
            setLoading(false);
        }
    };

    // Format date for display
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Get member since date
    const getMemberSince = () => {
        if (!user?.created_at) return 'January 2024';
        const date = new Date(user.created_at);
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    // Get user initials for avatar fallback
    const getUserInitials = () => {
        if (!user?.name) return 'U';
        return user.name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
    };

    // Handle profile image error
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = `https://ui-avatars.com/api/?name=${getUserInitials()}&background=4361ee&color=fff&size=128`;
    };

    // Handle social links click
    const handleSocialClick = (platform: string, url?: string) => {
        if (url) {
            window.open(url, '_blank');
        } else {
            Swal.fire({
                icon: 'info',
                title: `${platform} Profile`,
                text: `No ${platform} URL provided. Update your profile to add one.`,
                confirmButtonColor: '#4361ee'
            });
        }
    };

    // Get role badge color
    const getRoleBadgeColor = () => {
        switch (user?.role?.toLowerCase()) {
            case 'admin':
                return 'bg-danger text-white';
            case 'manager':
                return 'bg-warning text-white';
            case 'user':
                return 'bg-success text-white';
            case 'pro':
                return 'bg-primary text-white';
            default:
                return 'bg-secondary text-white';
        }
    };

    // Get role display name's
    const getRoleDisplayName = () => {
        if (!user?.role) return 'User';
        return user.role.charAt(0).toUpperCase() + user.role.slice(1);
    };

    // Get user job title (default based on role)
    const getJobTitle = () => {
        if (user?.job_title) return user.job_title;
        
        switch (user?.role?.toLowerCase()) {
            case 'admin':
                return 'System Administrator';
            case 'manager':
                return 'Project Manager';
            case 'user':
                return 'Web Developer';
            default:
                return 'Member';
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Loading profile...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <IconUser className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No User Found</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Please login to view your profile</p>
                    <Link to="/auth/boxed-signin" className="btn btn-primary">
                        Go to Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Breadcrumb */}
            <ul className="flex space-x-2 rtl:space-x-reverse mb-5">
                <li>
                    <Link to="/" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Profile</span>
                </li>
            </ul>

            {/* User Info */}
            <div className="pt-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5">
                    <div className="panel">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Profile</h5>
                            <Link to="/users/user-account-settings" className="ltr:ml-auto rtl:mr-auto btn btn-primary p-2 rounded-full">
                                <IconPencilPaper />
                            </Link>
                        </div>
                        <div className="mb-5">
                            <div className="flex flex-col justify-center items-center">
                                <img 
                                    src={user.profile_image || `https://ui-avatars.com/api/?name=${getUserInitials()}&background=4361ee&color=fff&size=128`} 
                                    alt={user.name} 
                                    className="w-24 h-24 rounded-full object-cover mb-5 border-4 border-white dark:border-dark shadow"
                                    onError={handleImageError}
                                />
                                <div className="text-center">
                                    <p className="font-semibold text-primary text-xl">{user.name}</p>
                                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${getRoleBadgeColor()}`}>
                                        {getRoleDisplayName()}
                                    </span>
                                    {user.is_active === false && (
                                        <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 ml-2">
                                            Inactive
                                        </span>
                                    )}
                                </div>
                            </div>
                            <ul className="mt-5 flex flex-col max-w-[160px] m-auto space-y-4 font-semibold text-white-dark">
                                <li className="flex items-center gap-2">
                                    <IconCoffee className="shrink-0" />
                                    {getJobTitle()}
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconCalendar className="shrink-0" />
                                    Joined {getMemberSince()}
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconMapPin className="shrink-0" />
                                    {user.location || 'New York, USA'}
                                </li>
                                <li>
                                    <button 
                                        className="flex items-center gap-2 hover:text-primary transition-colors"
                                        onClick={() => window.location.href = `mailto:${user.email}`}
                                    >
                                        <IconMail className="w-5 h-5 shrink-0" />
                                        <span className="text-primary truncate">{user.email}</span>
                                    </button>
                                </li>
                                <li className="flex items-center gap-2">
                                    <IconPhone />
                                    <span className="whitespace-nowrap" dir="ltr">
                                        {user.phone || '+1 (234) 567-8900'}
                                    </span>
                                </li>
                            </ul>
                            {user.bio && (
                                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                    <h6 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">About</h6>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{user.bio}</p>
                                </div>
                            )}
                            <ul className="mt-7 flex items-center justify-center gap-2">
                                <li>
                                    <button 
                                        className="btn btn-info flex items-center justify-center rounded-full w-10 h-10 p-0 hover:scale-110 transition-transform"
                                        onClick={() => handleSocialClick('Twitter', user.twitter_url)}
                                    >
                                        <IconTwitter className="w-5 h-5" />
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="btn btn-danger flex items-center justify-center rounded-full w-10 h-10 p-0 hover:scale-110 transition-transform"
                                        onClick={() => handleSocialClick('Dribbble', user.dribbble_url)}
                                    >
                                        <IconDribbble />
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="btn btn-dark flex items-center justify-center rounded-full w-10 h-10 p-0 hover:scale-110 transition-transform"
                                        onClick={() => handleSocialClick('GitHub', user.github_url)}
                                    >
                                        <IconGithub />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Task Progress (You can customize this with real data) */}
                    <div className="panel lg:col-span-2 xl:col-span-3">
                        <div className="mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">My Projects</h5>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">Track your ongoing projects</p>
                        </div>
                        <div className="mb-5">
                            <div className="table-responsive text-[#515365] dark:text-white-light font-semibold">
                                <table className="whitespace-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Projects</th>
                                            <th>Progress</th>
                                            <th>Task Done</th>
                                            <th className="text-center">Last Updated</th>
                                        </tr>
                                    </thead>
                                    <tbody className="dark:text-white-dark">
                                        <tr>
                                            <td>CRM Dashboard</td>
                                            <td>
                                                <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                    <div className="bg-primary rounded-full w-[75%]"></div>
                                                </div>
                                            </td>
                                            <td className="text-success">75%</td>
                                            <td className="text-center">2 days ago</td>
                                        </tr>
                                        <tr>
                                            <td>User Management</td>
                                            <td>
                                                <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                    <div className="bg-success rounded-full w-[100%]"></div>
                                                </div>
                                            </td>
                                            <td className="text-success">100%</td>
                                            <td className="text-center">1 week ago</td>
                                        </tr>
                                        <tr>
                                            <td>Authentication System</td>
                                            <td>
                                                <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                    <div className="bg-success rounded-full w-[100%]"></div>
                                                </div>
                                            </td>
                                            <td className="text-success">100%</td>
                                            <td className="text-center">2 weeks ago</td>
                                        </tr>
                                        <tr>
                                            <td>API Integration</td>
                                            <td>
                                                <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                                    <div className="bg-warning rounded-full w-[50%]"></div>
                                                </div>
                                            </td>
                                            <td className="text-warning">50%</td>
                                            <td className="text-center">3 days ago</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats and Payment Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="panel">
                        <div className="mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Summary</h5>
                        </div>
                        <div className="space-y-4">
                            <div className="border border-[#ebedf2] rounded dark:bg-[#1b2e4b] dark:border-0">
                                <div className="flex items-center justify-between p-4 py-2">
                                    <div className="grid place-content-center w-9 h-9 rounded-md bg-primary-light dark:bg-primary text-primary dark:text-primary-light">
                                        <IconShoppingBag />
                                    </div>
                                    <div className="ltr:ml-4 rtl:mr-4 flex items-start justify-between flex-auto font-semibold">
                                        <h6 className="text-white-dark text-[13px] dark:text-white-dark">
                                            Account Created
                                            <span className="block text-base text-[#515365] dark:text-white-light">
                                                {formatDate(user.created_at)}
                                            </span>
                                        </h6>
                                        <p className="ltr:ml-auto rtl:mr-auto text-primary">✓</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[#ebedf2] rounded dark:bg-[#1b2e4b] dark:border-0">
                                <div className="flex items-center justify-between p-4 py-2">
                                    <div className="grid place-content-center w-9 h-9 rounded-md bg-success-light dark:bg-success text-success dark:text-success-light">
                                        <IconTag />
                                    </div>
                                    <div className="ltr:ml-4 rtl:mr-4 flex items-start justify-between flex-auto font-semibold">
                                        <h6 className="text-white-dark text-[13px] dark:text-white-dark">
                                            User Status
                                            <span className="block text-base text-[#515365] dark:text-white-light">
                                                {user.is_active ? 'Active' : 'Inactive'}
                                            </span>
                                        </h6>
                                        <p className="ltr:ml-auto rtl:mr-auto text-success">{user.is_active ? '✓' : '✗'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-[#ebedf2] rounded dark:bg-[#1b2e4b] dark:border-0">
                                <div className="flex items-center justify-between p-4 py-2">
                                    <div className="grid place-content-center w-9 h-9 rounded-md bg-info-light dark:bg-info text-info dark:text-info-light">
                                        <IconCreditCard />
                                    </div>
                                    <div className="ltr:ml-4 rtl:mr-4 flex items-start justify-between flex-auto font-semibold">
                                        <h6 className="text-white-dark text-[13px] dark:text-white-dark">
                                            User ID
                                            <span className="block text-base text-[#515365] dark:text-white-light font-mono text-xs">
                                                {user.id.substring(0, 8)}...
                                            </span>
                                        </h6>
                                        <p className="ltr:ml-auto rtl:mr-auto text-info">ID</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Account Info */}
                    <div className="panel">
                        <div className="flex items-center justify-between mb-10">
                            <h5 className="font-semibold text-lg dark:text-white-light">Account Info</h5>
                            <button className="btn btn-primary" onClick={() => navigate('/users/user-account-settings')}>
                                Edit Profile
                            </button>
                        </div>
                        <div className="group">
                            <ul className="list-inside list-disc text-white-dark font-semibold mb-7 space-y-2">
                                <li>Email: {user.email}</li>
                                <li>Role: {getRoleDisplayName()}</li>
                                <li>Member Since: {getMemberSince()}</li>
                                <li>Account ID: {user.id.substring(0, 12)}...</li>
                            </ul>
                            <div className="flex items-center justify-between mb-4 font-semibold">
                                <p className="flex items-center rounded-full bg-primary px-3 py-1 text-xs text-white-light font-semibold">
                                    <IconClock className="w-3 h-3 ltr:mr-1 rtl:ml-1" />
                                    {formatDate(user.created_at)}
                                </p>
                                <p className="text-info">{user.role.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;