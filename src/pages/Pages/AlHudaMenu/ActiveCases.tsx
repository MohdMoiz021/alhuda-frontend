import { Link } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Dropdown from '../../../components/Dropdown';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconHorizontalDots from '../../../components/Icon/IconHorizontalDots';
import IconTrendingUp from '../../../components/Icon/IconTrendingUp';
import IconPlus from '../../../components/Icon/IconPlus';
import IconCreditCard from '../../../components/Icon/IconCreditCard';
import IconMail from '../../../components/Icon/IconMail';
import IconChecks from '../../../components/Icon/IconChecks';
import IconFile from '../../../components/Icon/IconFile';
import IconServer from '../../../components/Icon/IconServer';
import IconChrome from '../../../components/Icon/IconChrome';
import IconSafari from '../../../components/Icon/IconSafari';
import IconGlobe from '../../../components/Icon/IconGlobe';
import IconUsersGroup from '../../../components/Icon/IconUsersGroup';
import IconLink from '../../../components/Icon/IconLink';
import IconChatDots from '../../../components/Icon/IconChatDots';
import IconThumbUp from '../../../components/Icon/IconThumbUp';
import IconCaretsDown from '../../../components/Icon/IconCaretsDown';
import IconSquareCheck from '../../../components/Icon/IconSquareCheck';
import IconClock from '../../../components/Icon/IconClock';
import IconSearch from '../../../components/Icon/IconSearch';
import IconCalendar from '../../../components/Icon/IconCalendar';
import IconFilter from '../../../components/Icon/IconFilter';
import IconEye from '../../../components/Icon/IconEye';
import IconEdit from '../../../components/Icon/IconEdit';
import IconFileText from '../../../components/Icon/IconFileText';
import IconDownload from '../../../components/Icon/IconDownload';
import IconTrashLines from '../../../components/Icon/IconTrashLines';
import IconFolder from '../../../components/Icon/IconFolder';
import IconCheckCircle from '../../../components/Icon/IconCheckCircle';
import IconXCircle from '../../../components/Icon/IconXCircle';
import IconAlertCircle from '../../../components/Icon/IconAlertCircle';
import IconClockFilled from '../../../components/Icon/IconClockFilled';
import IconRefresh from '../../../components/Icon/IconRefresh';
import IconActivity from '../../../components/Icon/IconActivity';
import IconArrowUp from '../../../components/Icon/IconArrowUp';
import IconArrowDown from '../../../components/Icon/IconArrowDown';

const ActiveCases = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Active Cases - Partner Dashboard'));
    });

    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    // Mock data for active cases
    const [cases, setCases] = useState([
        {
            id: 'ALH-2024-00124',
            clientName: 'Ahmed Hassan',
            company: 'Hassan Constructions',
            serviceType: 'Project Funding',
            status: 'in_review',
            statusLabel: 'Under Review',
            priority: 'high',
            createdAt: '2024-01-21',
            lastUpdated: '2024-01-21',
            dueDate: '2024-01-25',
            dealValue: 500000,
            commission: 25000,
            documents: 8,
            assignedTo: 'Michael Chen',
            progress: 40,
            nextAction: 'Awaiting bank approval'
        },
        {
            id: 'ALH-2024-00125',
            clientName: 'Fatima Al-Mansoori',
            company: 'Mansoori Investments',
            serviceType: 'Trade Facilities (LC)',
            status: 'clarification',
            statusLabel: 'Clarification Needed',
            priority: 'high',
            createdAt: '2024-01-19',
            lastUpdated: '2024-01-22',
            dueDate: '2024-01-24',
            dealValue: 75000,
            commission: 3750,
            documents: 3,
            assignedTo: 'Robert Williams',
            progress: 25,
            nextAction: 'Upload missing document'
        },
        {
            id: 'ALH-2024-00126',
            clientName: 'Khalid Mohammed',
            company: 'KM Enterprises',
            serviceType: 'Sukuk Funding',
            status: 'pending',
            statusLabel: 'Pending Review',
            priority: 'medium',
            createdAt: '2024-01-22',
            lastUpdated: '2024-01-22',
            dueDate: '2024-01-26',
            dealValue: 250000,
            commission: 12500,
            documents: 6,
            assignedTo: 'Not Assigned',
            progress: 10,
            nextAction: 'Initial review pending'
        },
        {
            id: 'ALH-2024-00127',
            clientName: 'Layla Abdullah',
            company: 'Abdullah & Sons',
            serviceType: 'Business Account Opening',
            status: 'in_process',
            statusLabel: 'In Process',
            priority: 'medium',
            createdAt: '2024-01-15',
            lastUpdated: '2024-01-21',
            dueDate: '2024-01-30',
            dealValue: 10000,
            commission: 1500,
            documents: 4,
            assignedTo: 'Sarah Johnson',
            progress: 75,
            nextAction: 'Final documentation'
        },
        {
            id: 'ALH-2024-00130',
            clientName: 'Salem Al-Ghamdi',
            company: 'Ghamdi Industries',
            serviceType: 'Other Custom Services',
            status: 'in_process',
            statusLabel: 'In Process',
            priority: 'high',
            createdAt: '2024-01-17',
            lastUpdated: '2024-01-22',
            dueDate: '2024-01-28',
            dealValue: 80000,
            commission: 4000,
            documents: 6,
            assignedTo: 'Sarah Johnson',
            progress: 60,
            nextAction: 'Client meeting scheduled'
        },
        {
            id: 'ALH-2024-00131',
            clientName: 'Rashid Al-Otaibi',
            company: 'Otaibi Trading',
            serviceType: 'Trade Facilities (BG)',
            status: 'clarification',
            statusLabel: 'Clarification Needed',
            priority: 'medium',
            createdAt: '2024-01-20',
            lastUpdated: '2024-01-23',
            dueDate: '2024-01-27',
            dealValue: 120000,
            commission: 6000,
            documents: 5,
            assignedTo: 'Michael Chen',
            progress: 30,
            nextAction: 'Clarify collateral details'
        },
        {
            id: 'ALH-2024-00132',
            clientName: 'Noura Al-Qasimi',
            company: 'Qasimi Holdings',
            serviceType: 'Project Funding',
            status: 'in_review',
            statusLabel: 'Under Review',
            priority: 'low',
            createdAt: '2024-01-18',
            lastUpdated: '2024-01-22',
            dueDate: '2024-02-01',
            dealValue: 350000,
            commission: 17500,
            documents: 7,
            assignedTo: 'Robert Williams',
            progress: 50,
            nextAction: 'Risk assessment in progress'
        },
        {
            id: 'ALH-2024-00133',
            clientName: 'Yousef Al-Farsi',
            company: 'Farsi Enterprises',
            serviceType: 'Business Account Opening',
            status: 'in_process',
            statusLabel: 'In Process',
            priority: 'medium',
            createdAt: '2024-01-16',
            lastUpdated: '2024-01-23',
            dueDate: '2024-01-29',
            dealValue: 15000,
            commission: 2250,
            documents: 4,
            assignedTo: 'Sarah Johnson',
            progress: 85,
            nextAction: 'Awaiting client signature'
        }
    ]);

    const [filteredCases, setFilteredCases] = useState(cases);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [priorityFilter, setPriorityFilter] = useState('all');
    const [viewMode, setViewMode] = useState('list'); // 'list' or 'kanban'

    // Filter cases based on search and filters
    useEffect(() => {
        let filtered = [...cases];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(caseItem =>
                caseItem.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                caseItem.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                caseItem.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                caseItem.serviceType.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Status filter
        if (statusFilter !== 'all') {
            filtered = filtered.filter(caseItem => caseItem.status === statusFilter);
        }

        // Priority filter
        if (priorityFilter !== 'all') {
            filtered = filtered.filter(caseItem => caseItem.priority === priorityFilter);
        }

        setFilteredCases(filtered);
    }, [searchTerm, statusFilter, priorityFilter, cases]);

    // Get status badge color
    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'in_review':
                return { 
                    bg: 'bg-info-light dark:bg-info-dark-light', 
                    text: 'text-info', 
                    icon: <IconClockFilled className="w-4 h-4" /> 
                };
            case 'clarification':
                return { 
                    bg: 'bg-warning-light dark:bg-warning-dark-light', 
                    text: 'text-warning', 
                    icon: <IconAlertCircle className="w-4 h-4" /> 
                };
            case 'pending':
                return { 
                    bg: 'bg-secondary-light dark:bg-secondary-dark-light', 
                    text: 'text-secondary', 
                    icon: <IconClock className="w-4 h-4" /> 
                };
            case 'in_process':
                return { 
                    bg: 'bg-primary-light dark:bg-primary-dark-light', 
                    text: 'text-primary', 
                    icon: <IconActivity className="w-4 h-4" /> 
                };
            default:
                return { 
                    bg: 'bg-secondary-light dark:bg-secondary-dark-light', 
                    text: 'text-secondary', 
                    icon: <IconClock className="w-4 h-4" /> 
                };
        }
    };

    // Get priority badge color
    const getPriorityBadge = (priority: string) => {
        switch (priority) {
            case 'high':
                return { 
                    bg: 'bg-danger-light dark:bg-danger-dark-light', 
                    text: 'text-danger', 
                    label: 'High',
                    icon: <IconArrowUp className="w-3 h-3" />
                };
            case 'medium':
                return { 
                    bg: 'bg-warning-light dark:bg-warning-dark-light', 
                    text: 'text-warning', 
                    label: 'Medium',
                    icon: <IconTrendingUp className="w-3 h-3" />
                };
            case 'low':
                return { 
                    bg: 'bg-success-light dark:bg-success-dark-light', 
                    text: 'text-success', 
                    label: 'Low',
                    icon: <IconArrowDown className="w-3 h-3" />
                };
            default:
                return { 
                    bg: 'bg-secondary-light dark:bg-secondary-dark-light', 
                    text: 'text-secondary', 
                    label: 'Standard',
                    icon: null
                };
        }
    };

    // Calculate statistics
    const totalActiveCases = cases.length;
    const totalCommission = cases.reduce((sum, caseItem) => sum + caseItem.commission, 0);
    const averageProgress = cases.reduce((sum, caseItem) => sum + caseItem.progress, 0) / cases.length;
    
    const statusCounts = {
        in_review: cases.filter(c => c.status === 'in_review').length,
        clarification: cases.filter(c => c.status === 'clarification').length,
        pending: cases.filter(c => c.status === 'pending').length,
        in_process: cases.filter(c => c.status === 'in_process').length
    };

    // Progress bar color based on percentage
    const getProgressColor = (progress: number) => {
        if (progress < 30) return 'danger';
        if (progress < 70) return 'warning';
        return 'success';
    };

    // Days remaining calculation
    const getDaysRemaining = (dueDate: string) => {
        const today = new Date();
        const due = new Date(dueDate);
        const diffTime = due.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    // Get days remaining badge color
    const getDaysBadgeColor = (days: number) => {
        if (days <= 2) return 'danger';
        if (days <= 5) return 'warning';
        return 'success';
    };

    // Kanban view data
    const kanbanColumns = [
        {
            id: 'pending',
            title: 'Pending Review',
            cases: cases.filter(c => c.status === 'pending'),
            color: 'secondary'
        },
        {
            id: 'in_review',
            title: 'Under Review',
            cases: cases.filter(c => c.status === 'in_review'),
            color: 'info'
        },
        {
            id: 'clarification',
            title: 'Clarification',
            cases: cases.filter(c => c.status === 'clarification'),
            color: 'warning'
        },
        {
            id: 'in_process',
            title: 'In Process',
            cases: cases.filter(c => c.status === 'in_process'),
            color: 'primary'
        }
    ];

    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-xl font-bold">Active Cases</h2>
                    <p className="text-gray-500">Track and manage your ongoing referrals</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('list')}
                            className={`px-4 py-2 rounded ${viewMode === 'list' ? 'bg-white dark:bg-gray-900 shadow' : 'text-gray-500'}`}
                        >
                            List View
                        </button>
                        <button
                            onClick={() => setViewMode('kanban')}
                            className={`px-4 py-2 rounded ${viewMode === 'kanban' ? 'bg-white dark:bg-gray-900 shadow' : 'text-gray-500'}`}
                        >
                            Kanban View
                        </button>
                    </div>
                    <Link to="/cases/new" className="btn btn-primary gap-2">
                        <IconPlus />
                        New Referral
                    </Link>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Active Cases</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{totalActiveCases}</div>
                                <span className="text-success text-sm font-medium ml-2">+2 this week</span>
                            </div>
                        </div>
                        <div className="bg-primary/10 p-3 rounded-full">
                            <IconActivity className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Pending Commission</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">${totalCommission.toLocaleString()}</div>
                                <span className="text-success text-sm font-medium ml-2">+15%</span>
                            </div>
                        </div>
                        <div className="bg-success/10 p-3 rounded-full">
                            <IconCreditCard className="w-8 h-8 text-success" />
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Avg. Progress</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{Math.round(averageProgress)}%</div>
                                <div className="ml-3 w-24">
                                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full bg-${getProgressColor(averageProgress)} rounded-full`}
                                            style={{ width: `${averageProgress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-warning/10 p-3 rounded-full">
                            <IconTrendingUp className="w-8 h-8 text-warning" />
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Response Needed</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{statusCounts.clarification}</div>
                                <span className="text-danger text-sm font-medium ml-2">Urgent</span>
                            </div>
                        </div>
                        <div className="bg-danger/10 p-3 rounded-full">
                            <IconAlertCircle className="w-8 h-8 text-danger" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="panel mb-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex-1">
                        <div className="relative max-w-xs">
                            <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search active cases..."
                                className="form-input pl-10 w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3">
                        <select
                            className="form-select w-40"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="all">All Status</option>
                            <option value="pending">Pending Review</option>
                            <option value="in_review">Under Review</option>
                            <option value="clarification">Clarification Needed</option>
                            <option value="in_process">In Process</option>
                        </select>

                        <select
                            className="form-select w-32"
                            value={priorityFilter}
                            onChange={(e) => setPriorityFilter(e.target.value)}
                        >
                            <option value="all">All Priority</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>

                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setStatusFilter('all');
                                setPriorityFilter('all');
                            }}
                            className="btn btn-outline-primary gap-2"
                        >
                            <IconRefresh className="w-4 h-4" />
                            Reset Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Status Distribution Chart */}
            <div className="panel mb-6">
                <h5 className="font-semibold text-lg mb-5">Active Cases Distribution</h5>
                <div className="h-80">
                    <ReactApexChart
                        series={[{
                            name: 'Cases',
                            data: [
                                statusCounts.pending,
                                statusCounts.in_review,
                                statusCounts.clarification,
                                statusCounts.in_process
                            ]
                        }]}
                        options={{
                            chart: {
                                height: 350,
                                type: 'bar',
                                toolbar: { show: false }
                            },
                            plotOptions: {
                                bar: {
                                    borderRadius: 8,
                                    horizontal: false,
                                    columnWidth: '55%',
                                    distributed: true,
                                }
                            },
                            dataLabels: { enabled: false },
                            stroke: {
                                show: true,
                                width: 2,
                                colors: ['transparent']
                            },
                            colors: ['#805dca', '#4361ee', '#e2a03f', '#00ab55'],
                            xaxis: {
                                categories: ['Pending Review', 'Under Review', 'Clarification', 'In Process']
                            },
                            yaxis: { 
                                title: { text: 'Number of Cases' },
                                min: 0,
                                max: Math.max(...Object.values(statusCounts)) + 2
                            },
                            fill: { 
                                opacity: 1,
                                type: 'gradient',
                                gradient: {
                                    shade: 'dark',
                                    type: 'vertical',
                                    shadeIntensity: 0.5,
                                    gradientToColors: ['#a78bfa', '#60a5fa', '#fbbf24', '#34d399'],
                                    inverseColors: false,
                                    opacityFrom: 0.85,
                                    opacityTo: 0.85,
                                    stops: [0, 100]
                                }
                            },
                            tooltip: {
                                y: {
                                    formatter: function(val: number) {
                                        return val + " cases";
                                    }
                                }
                            }
                        }}
                        type="bar"
                        height={350}
                    />
                </div>
            </div>

            {/* Cases Display - List View or Kanban View */}
            {viewMode === 'list' ? (
                /* List View */
                <div className="panel">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg">Active Cases ({filteredCases.length})</h5>
                        <div className="text-sm text-gray-500">
                            {filteredCases.length} ongoing cases
                        </div>
                    </div>

                    <PerfectScrollbar>
                        <div className="table-responsive">
                            <table className="table-hover">
                                <thead>
                                    <tr>
                                        <th className="!px-3">Case ID</th>
                                        <th>Client</th>
                                        <th>Service Type</th>
                                        <th>Progress</th>
                                        <th>Status</th>
                                        <th>Priority</th>
                                        <th>Due Date</th>
                                        <th>Commission</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredCases.length === 0 ? (
                                        <tr>
                                            <td colSpan={9} className="text-center py-8 text-gray-500">
                                                No active cases found matching your filters
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredCases.map((caseItem, index) => {
                                            const statusBadge = getStatusBadge(caseItem.status);
                                            const priorityBadge = getPriorityBadge(caseItem.priority);
                                            const daysRemaining = getDaysRemaining(caseItem.dueDate);
                                            const daysBadgeColor = getDaysBadgeColor(daysRemaining);
                                            const progressColor = getProgressColor(caseItem.progress);
                                            
                                            return (
                                                <tr key={index} className="group hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                                    <td className="!px-3">
                                                        <div className="font-semibold text-primary hover:underline cursor-pointer">
                                                            {caseItem.id}
                                                        </div>
                                                        <div className="text-xs text-gray-500">{caseItem.createdAt}</div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <div className="font-medium">{caseItem.clientName}</div>
                                                            <div className="text-xs text-gray-500">{caseItem.company}</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="font-medium">{caseItem.serviceType}</div>
                                                        <div className="text-xs text-gray-500">{caseItem.documents} docs</div>
                                                    </td>
                                                    <td>
                                                        <div className="w-32">
                                                            <div className="flex justify-between text-xs mb-1">
                                                                <span>Progress</span>
                                                                <span className="font-medium">{caseItem.progress}%</span>
                                                            </div>
                                                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                                <div 
                                                                    className={`h-full bg-${progressColor} rounded-full`}
                                                                    style={{ width: `${caseItem.progress}%` }}
                                                                ></div>
                                                            </div>
                                                            <div className="text-xs text-gray-500 mt-1">{caseItem.nextAction}</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${statusBadge.bg} ${statusBadge.text}`}>
                                                            {statusBadge.icon}
                                                            <span className="text-xs font-medium">{caseItem.statusLabel}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${priorityBadge.bg} ${priorityBadge.text}`}>
                                                            {priorityBadge.icon}
                                                            <span className="text-xs font-medium">{priorityBadge.label}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>{caseItem.dueDate}</div>
                                                        <div className={`text-xs px-2 py-0.5 rounded-full inline-block mt-1 bg-${daysBadgeColor}-light dark:bg-${daysBadgeColor}-dark-light text-${daysBadgeColor}`}>
                                                            {daysRemaining > 0 ? `${daysRemaining} days left` : 'Overdue'}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className={`font-semibold ${caseItem.commission > 0 ? 'text-success' : 'text-gray-500'}`}>
                                                            ${caseItem.commission.toLocaleString()}
                                                        </div>
                                                        <div className="text-xs text-gray-500">Assigned to: {caseItem.assignedTo}</div>
                                                    </td>
                                                    <td>
                                                        <div className="flex items-center justify-center gap-2">
                                                            <Link
                                                                to={`/cases/${caseItem.id}`}
                                                                className="btn btn-outline-primary btn-sm p-1.5"
                                                                title="View Details"
                                                            >
                                                                <IconEye className="w-4 h-4" />
                                                            </Link>
                                                            {caseItem.status === 'clarification' && (
                                                                <Link
                                                                    to={`/cases/${caseItem.id}/respond`}
                                                                    className="btn btn-warning btn-sm p-1.5"
                                                                    title="Respond to Clarification"
                                                                >
                                                                    <IconEdit className="w-4 h-4" />
                                                                </Link>
                                                            )}
                                                            <button
                                                                className="btn btn-outline-secondary btn-sm p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                                                title="Add Note"
                                                            >
                                                                <IconChatDots className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </PerfectScrollbar>
                </div>
            ) : (
                /* Kanban View */
                <div className="panel">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg">Active Cases Board</h5>
                        <div className="text-sm text-gray-500">
                            Drag and drop cases between columns
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {kanbanColumns.map((column) => (
                            <div key={column.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-3 h-3 rounded-full bg-${column.color}`}></div>
                                        <h3 className="font-semibold">{column.title}</h3>
                                    </div>
                                    <span className={`bg-${column.color}-light dark:bg-${column.color}-dark-light text-${column.color} text-xs font-medium px-2 py-1 rounded-full`}>
                                        {column.cases.length}
                                    </span>
                                </div>

                                <PerfectScrollbar className="max-h-[600px]">
                                    <div className="space-y-4">
                                        {column.cases.map((caseItem) => {
                                            const priorityBadge = getPriorityBadge(caseItem.priority);
                                            const daysRemaining = getDaysRemaining(caseItem.dueDate);
                                            const daysBadgeColor = getDaysBadgeColor(daysRemaining);
                                            const progressColor = getProgressColor(caseItem.progress);
                                            
                                            return (
                                                <div 
                                                    key={caseItem.id}
                                                    className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm hover:shadow-md transition-shadow"
                                                    draggable="true"
                                                >
                                                    <div className="flex justify-between items-start mb-3">
                                                        <div className="font-semibold text-primary">{caseItem.id}</div>
                                                        <div className={`px-2 py-1 rounded text-xs font-medium ${priorityBadge.bg} ${priorityBadge.text}`}>
                                                            {priorityBadge.label}
                                                        </div>
                                                    </div>
                                                    
                                                    <h4 className="font-medium mb-1">{caseItem.clientName}</h4>
                                                    <p className="text-sm text-gray-500 mb-3">{caseItem.serviceType}</p>
                                                    
                                                    <div className="mb-3">
                                                        <div className="flex justify-between text-xs mb-1">
                                                            <span>Progress</span>
                                                            <span className="font-medium">{caseItem.progress}%</span>
                                                        </div>
                                                        <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                            <div 
                                                                className={`h-full bg-${progressColor} rounded-full`}
                                                                style={{ width: `${caseItem.progress}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex items-center justify-between text-sm">
                                                        <div className="text-gray-500">
                                                            <IconFileText className="w-3 h-3 inline mr-1" />
                                                            {caseItem.documents}
                                                        </div>
                                                        <div className={`text-${daysBadgeColor} font-medium`}>
                                                            {daysRemaining > 0 ? `${daysRemaining}d left` : 'Overdue'}
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                                                        <span className="text-xs text-gray-500">${caseItem.commission.toLocaleString()}</span>
                                                        <div className="flex gap-1">
                                                            <Link
                                                                to={`/cases/${caseItem.id}`}
                                                                className="btn btn-outline-primary btn-xs p-1"
                                                                title="View"
                                                            >
                                                                <IconEye className="w-3 h-3" />
                                                            </Link>
                                                            <button className="btn btn-outline-secondary btn-xs p-1">
                                                                <IconChatDots className="w-3 h-3" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </PerfectScrollbar>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Quick Actions Panel */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="panel">
                    <h5 className="font-semibold text-lg mb-4">Needs Your Attention</h5>
                    <div className="space-y-3">
                        {cases
                            .filter(c => c.status === 'clarification')
                            .map((caseItem) => (
                                <div key={caseItem.id} className="flex items-center justify-between p-3 bg-warning-light dark:bg-warning-dark-light/20 rounded-lg">
                                    <div>
                                        <div className="font-medium">{caseItem.id}</div>
                                        <div className="text-sm text-gray-500">{caseItem.nextAction}</div>
                                    </div>
                                    <Link
                                        to={`/cases/${caseItem.id}/respond`}
                                        className="btn btn-warning btn-sm"
                                    >
                                        Respond
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="panel">
                    <h5 className="font-semibold text-lg mb-4">Upcoming Deadlines</h5>
                    <div className="space-y-3">
                        {cases
                            .filter(c => getDaysRemaining(c.dueDate) <= 3)
                            .sort((a, b) => getDaysRemaining(a.dueDate) - getDaysRemaining(b.dueDate))
                            .map((caseItem) => {
                                const daysRemaining = getDaysRemaining(caseItem.dueDate);
                                return (
                                    <div key={caseItem.id} className="flex items-center justify-between p-3 bg-danger-light dark:bg-danger-dark-light/20 rounded-lg">
                                        <div>
                                            <div className="font-medium">{caseItem.id}</div>
                                            <div className="text-sm text-gray-500">
                                                Due: {caseItem.dueDate} ({daysRemaining} days)
                                            </div>
                                        </div>
                                        <Link
                                            to={`/cases/${caseItem.id}`}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Review
                                        </Link>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className="panel">
                    <h5 className="font-semibold text-lg mb-4">Top Value Cases</h5>
                    <div className="space-y-3">
                        {cases
                            .sort((a, b) => b.commission - a.commission)
                            .slice(0, 3)
                            .map((caseItem) => (
                                <div key={caseItem.id} className="flex items-center justify-between p-3 bg-success-light dark:bg-success-dark-light/20 rounded-lg">
                                    <div>
                                        <div className="font-medium">{caseItem.id}</div>
                                        <div className="text-sm text-gray-500">${caseItem.commission.toLocaleString()} commission</div>
                                    </div>
                                    <div className="text-success font-bold">
                                        {caseItem.progress}%
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveCases;