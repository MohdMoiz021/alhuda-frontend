import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setPageTitle, toggleRTL } from '../../store/themeConfigSlice';
import Dropdown from '../../components/Dropdown';
import IconCaretDown from '../../components/Icon/IconCaretDown';
import IconUser from '../../components/Icon/IconUser';
import IconMail from '../../components/Icon/IconMail';
import IconLockDots from '../../components/Icon/IconLockDots';
import IconInstagram from '../../components/Icon/IconInstagram';
import IconFacebookCircle from '../../components/Icon/IconFacebookCircle';
import IconTwitter from '../../components/Icon/IconTwitter';
import IconGoogle from '../../components/Icon/IconGoogle';
import { IRootState } from '../../store';
import i18next from 'i18next';
import axios, { AxiosError } from 'axios';
import Swal from 'sweetalert2';

// Define TypeScript interfaces
interface FormData {
    name: string;
    email: string;
    password: string;
    newsletter: boolean;
}

interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
    [key: string]: string | undefined;
}

interface ApiResponse {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
        is_active: boolean;
        created_at: string;
    };
    message: string;
}

interface ApiErrorResponse {
    message: string;
    errors?: FormErrors;
}

const RegisterBoxed = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Redux state
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    
    // Component state
    const [flag, setFlag] = useState<string>(themeConfig.locale);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        newsletter: false
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [apiError, setApiError] = useState<string>('');

    // API Base URL - update this to match your backend
    const API_BASE_URL = 'http://localhost:5000/api';

    useEffect(() => {
        dispatch(setPageTitle('Register Boxed'));
    }, [dispatch]);

    const setLocale = (flag: string) => {
        setFlag(flag);
        if (flag.toLowerCase() === 'ae') {
            dispatch(toggleRTL('rtl'));
        } else {
            dispatch(toggleRTL('ltr'));
        }
    };

    // Handle input changes
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        
        // Clear error for this field when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
        
        // Clear API error when user interacts with form
        if (apiError) setApiError('');
    };

    // Form validation
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        } else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = 'Password must contain letters and numbers';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        setLoading(true);
        setApiError('');
        
        try {
            // API call to register endpoint
            const response = await axios.post<ApiResponse>(`${API_BASE_URL}/auth/signup`, {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
            
            // Success handling
            const { token, user, message } = response.data;
            
            // Store token in localStorage
            localStorage.setItem('authToken', token);
            localStorage.setItem('user', JSON.stringify(user));
            
            // Show success message
            await Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: message || 'Registration successful!',
                showConfirmButton: false,
                timer: 2000
            });
            
            // Navigate to dashboard or home
            navigate('/');
            
        } catch (error) {
            console.error('Registration error:', error);
            
            // Type-safe error handling
            const axiosError = error as AxiosError<ApiErrorResponse>;
            
            if (axiosError.response) {
                // Server responded with error status
                const { status, data } = axiosError.response;
                
                if (status === 400 || status === 409) {
                    // Validation errors or duplicate email
                    setApiError(data?.message || 'Registration failed');
                    
                    // Show specific field errors if available
                    if (data?.errors) {
                        setErrors(data.errors);
                    }
                } else if (status === 500) {
                    setApiError('Server error. Please try again later.');
                } else {
                    setApiError(data?.message || 'Registration failed');
                }
            } else if (axiosError.request) {
                // Request was made but no response
                setApiError('Network error. Please check your connection.');
            } else {
                // Other errors
                setApiError('An unexpected error occurred.');
            }
            
            // Show error alert
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: apiError || 'Please check your information and try again.',
                confirmButtonColor: '#4361ee'
            });
            
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="absolute inset-0">
                <img src="/assets/images/auth/bg-gradient.png" alt="image" className="h-full w-full object-cover" />
            </div>

            <div className="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
                {/* Background images */}
                <img src="/assets/images/auth/coming-soon-object1.png" alt="image" className="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2" />
                <img src="/assets/images/auth/coming-soon-object2.png" alt="image" className="absolute left-24 top-0 h-40 md:left-[30%]" />
                <img src="/assets/images/auth/coming-soon-object3.png" alt="image" className="absolute right-0 top-0 h-[300px]" />
                <img src="/assets/images/auth/polygon-object.svg" alt="image" className="absolute bottom-0 end-[28%]" />
                
                <div className="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
                    <div className="relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[758px] py-20">
                        
                        {/* Language Selector */}
                        <div className="absolute top-6 end-6">
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 8]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black"
                                    button={
                                        <>
                                            <div>
                                                <img src={`/assets/images/flags/${flag.toUpperCase()}.svg`} alt="image" className="h-5 w-5 rounded-full object-cover" />
                                            </div>
                                            <div className="text-base font-bold uppercase">{flag}</div>
                                            <span className="shrink-0">
                                                <IconCaretDown />
                                            </span>
                                        </>
                                    }
                                >
                                    <ul className="!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]">
                                        {themeConfig.languageList.map((item: any) => (
                                            <li key={item.code}>
                                                <button
                                                    type="button"
                                                    className={`flex w-full hover:text-primary rounded-lg ${flag === item.code ? 'bg-primary/10 text-primary' : ''}`}
                                                    onClick={() => {
                                                        i18next.changeLanguage(item.code);
                                                        setLocale(item.code);
                                                    }}
                                                >
                                                    <img src={`/assets/images/flags/${item.code.toUpperCase()}.svg`} alt="flag" className="w-5 h-5 object-cover rounded-full" />
                                                    <span className="ltr:ml-3 rtl:mr-3">{item.name}</span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        
                        {/* Registration Form */}
                        <div className="mx-auto w-full max-w-[440px]">
                            <div className="mb-10">
                                <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">Sign Up</h1>
                                <p className="text-base font-bold leading-normal text-white-dark">Enter your email and password to register</p>
                            </div>
                            
                            {/* API Error Display */}
                            {apiError && (
                                <div className="mb-4 p-3 rounded bg-danger/20 text-danger border border-danger/30">
                                    {apiError}
                                </div>
                            )}
                            
                            <form className="space-y-5 dark:text-white" onSubmit={handleSubmit}>
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block mb-1">
                                        Name {errors.name && <span className="text-danger text-sm">- {errors.name}</span>}
                                    </label>
                                    <div className="relative text-white-dark">
                                        <input 
                                            id="name"
                                            name="name"
                                            type="text" 
                                            placeholder="Enter Name" 
                                            className={`form-input ps-10 placeholder:text-white-dark ${errors.name ? 'border-danger' : ''}`}
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            disabled={loading}
                                        />
                                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                            <IconUser fill={true} />
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block mb-1">
                                        Email {errors.email && <span className="text-danger text-sm">- {errors.email}</span>}
                                    </label>
                                    <div className="relative text-white-dark">
                                        <input 
                                            id="email"
                                            name="email"
                                            type="email" 
                                            placeholder="Enter Email" 
                                            className={`form-input ps-10 placeholder:text-white-dark ${errors.email ? 'border-danger' : ''}`}
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            disabled={loading}
                                        />
                                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                            <IconMail fill={true} />
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Password Field */}
                                <div>
                                    <label htmlFor="password" className="block mb-1">
                                        Password {errors.password && <span className="text-danger text-sm">- {errors.password}</span>}
                                    </label>
                                    <div className="relative text-white-dark">
                                        <input 
                                            id="password"
                                            name="password"
                                            type="password" 
                                            placeholder="Enter Password" 
                                            className={`form-input ps-10 placeholder:text-white-dark ${errors.password ? 'border-danger' : ''}`}
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            disabled={loading}
                                        />
                                        <span className="absolute start-4 top-1/2 -translate-y-1/2">
                                            <IconLockDots fill={true} />
                                        </span>
                                    </div>
                                    <p className="text-xs text-white-dark mt-1">
                                        Must be at least 6 characters with letters and numbers
                                    </p>
                                </div>
                                
                                {/* Newsletter Checkbox */}
                                <div>
                                    <label className="flex cursor-pointer items-center">
                                        <input 
                                            type="checkbox" 
                                            name="newsletter"
                                            className="form-checkbox bg-white dark:bg-black" 
                                            checked={formData.newsletter}
                                            onChange={handleInputChange}
                                            disabled={loading}
                                        />
                                        <span className="text-white-dark ml-2">Subscribe to weekly newsletter</span>
                                    </label>
                                </div>
                                
                                {/* Submit Button */}
                                <button 
                                    type="submit" 
                                    className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)] disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </span>
                                    ) : 'Sign Up'}
                                </button>
                            </form>
                            
                            {/* Divider */}
                            <div className="relative my-7 text-center md:mb-9">
                                <span className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-white-light dark:bg-white-dark"></span>
                                <span className="relative bg-white px-2 font-bold uppercase text-white-dark dark:bg-dark dark:text-white-light">or</span>
                            </div>
                            
                            {/* Social Login */}
                            <div className="mb-10 md:mb-[60px]">
                                <ul className="flex justify-center gap-3.5 text-white">
                                    <li>
                                        <Link to="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110" style={{ background: 'linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)' }}>
                                            <IconInstagram />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110" style={{ background: 'linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)' }}>
                                            <IconFacebookCircle />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110" style={{ background: 'linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)' }}>
                                            <IconTwitter fill={true} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110" style={{ background: 'linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)' }}>
                                            <IconGoogle />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Login Link */}
                            <div className="text-center dark:text-white">
                                Already have an account ?&nbsp;
                                <Link to="/auth/boxed-signin" className="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
                                    SIGN IN
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterBoxed;