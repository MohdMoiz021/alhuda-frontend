import { Link } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Dropdown from '../../../components/Dropdown';
import { useEffect, useState } from 'react';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconHorizontalDots from '../../../components/Icon/IconHorizontalDots';
import IconPlus from '../../../components/Icon/IconPlus';
import IconCreditCard from '../../../components/Icon/IconCreditCard';
import IconMail from '../../../components/Icon/IconMail';
import IconChecks from '../../../components/Icon/IconChecks';
import IconFile from '../../../components/Icon/IconFile';
import IconServer from '../../../components/Icon/IconServer';
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
import IconAlertCircle from '../../../components/Icon/IconAlertCircle';
import IconRefresh from '../../../components/Icon/IconRefresh';
import IconHourglass from '../../../components/Icon/IconHourglass';
import IconInfoCircle from '../../../components/Icon/IconInfoCircle';
import IconExclamationTriangle from '../../../components/Icon/IconExclamationTriangle';
import IconUserCheck from '../../../components/Icon/IconUserCheck';

const PendingCases = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Pending Cases - Partner Dashboard'));
    });

    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    // Mock data for pending cases
    const [cases, setCases] = useState([
        {
            id: 'ALH-2024-00134',
            clientName: 'Mohammed Al-Rashid',
            company: 'Rashid Trading',
            serviceType: 'Business Account Opening',
            status: 'pending',
            statusLabel: 'Pending Review',
            priority: 'medium',
            createdAt: '2024-01-23',
            submittedAt: 'Today, 10:30 AM',
            daysInPending: 0,
            estimatedReviewTime: '24 hours',
            dealValue: 20000,
            commission: 3000,
            documents: 5,
            assignedTo: 'Not Assigned',
            reviewStage: 'Initial Screening'
        },
        {
            id: 'ALH-2024-00135',
            clientName: 'Fatima Al-Zahra',
            company: 'Zahra Cosmetics',
            serviceType: 'Trade Facilities (LC)',
            status: 'pending',
            statusLabel: 'Pending Review',
            priority: 'high',
            createdAt: '2024-01-22',
            submittedAt: 'Yesterday, 3:45 PM',
            daysInPending: 1,
            estimatedReviewTime: '12 hours remaining',
            dealValue: 150000,
            commission: 7500,
            documents: 8,
            assignedTo: 'Michael Chen',
            reviewStage: 'Document Verification'
        },
        {
            id: 'ALH-2024-00136',
            clientName: 'Khalid Al-Omari',
            company: 'Omari Constructions',
            serviceType: 'Project Funding',
            status: 'pending',
            statusLabel: 'Pending Review',
            priority: 'high',
            createdAt: '2024-01-21',
            submittedAt: '2 days ago',
            daysInPending: 2,
            estimatedReviewTime: 'Overdue',
            dealValue: 750000,
            commission: 37500,
            documents: 12,
            assignedTo: 'Sarah Johnson',
            reviewStage: 'Risk Assessment'
        },
        {
            id: 'ALH-2024-00137',
            clientName: 'Layla Al-Mansoor',
            company: 'Mansoor Retail',
            serviceType: 'Sukuk Funding',
            status: 'pending',
            statusLabel: 'Pending Review',
            priority: 'medium',
            createdAt: '2024-01-20',
            submittedAt: '3 days ago',
            daysInPending: 3,
            estimatedReviewTime: 'Overdue',
            dealValue: 300000,
            commission: 15000,
            documents: 7,
            assignedTo: 'Not Assigned',
            reviewStage: 'Initial Screening'
        },
        {
            id: 'ALH-2024-00138',
            clientName: 'Omar Al-Farsi',
            company: 'Farsi Logistics',
            serviceType: 'Trade Facilities (BG)',
            status: 'pending',
            statusLabel: 'Pending Review',
            priority: 'low',
            createdAt: '2024-01-19',
            submittedAt: '4 days ago',
            daysInPending: 4,
            estimatedReviewTime: 'Overdue',
            dealValue: 80000,
            commission: 4000,
            documents: 6,
            assignedTo: 'Robert Williams',
            reviewStage: 'Document Verification'
        },
        {
            id: 'ALH-2024-00139',
            clientName: 'Noura Al-Shehhi',
            company: 'Shehhi Investments',
            serviceType: 'Business Account Opening',
            status: 'pending',
            statusLabel: 'Pending Review',
            priority: 'medium',
            createdAt: '2024-01-23',
            submittedAt: 'Today, 9:15 AM',
            daysInPending: 0,
            estimatedReviewTime: '24 hours',
            dealValue: 25000,
            commission: 3750,
            documents: 4,
            assignedTo: 'Not Assigned',
            reviewStage: 'Initial Screening'
        },
        {
            id: 'ALH-2024-00140',
            clientName: 'Salem Al-Ghamdi',
            company: 'Ghamdi Manufacturing',
            serviceType: 'Other Custom Services',
            status: 'pending',
            statusLabel: 'Pending Review',
            priority: 'high',
            createdAt: '2024-01-22',
            submittedAt: 'Yesterday, 2:30 PM',
            daysInPending: 1,
            estimatedReviewTime: '18 hours remaining',
            dealValue: 120000,
            commission: 6000,
            documents: 9,
            assignedTo: 'Michael Chen',
            reviewStage: 'Document Verification'
        }
    ]);

    const [filteredCases, setFilteredCases] = useState(cases);
    const [searchTerm, setSearchTerm] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('all');
    const [daysFilter, setDaysFilter] = useState('all');
    const [sortBy, setSortBy] = useState('newest');

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

        // Priority filter
        if (priorityFilter !== 'all') {
            filtered = filtered.filter(caseItem => caseItem.priority === priorityFilter);
        }

        // Days filter
        if (daysFilter !== 'all') {
            switch (daysFilter) {
                case 'today':
                    filtered = filtered.filter(caseItem => caseItem.daysInPending === 0);
                    break;
                case 'yesterday':
                    filtered = filtered.filter(caseItem => caseItem.daysInPending === 1);
                    break;
                case 'overdue':
                    filtered = filtered.filter(caseItem => caseItem.estimatedReviewTime === 'Overdue');
                    break;
                case 'more_than_2':
                    filtered = filtered.filter(caseItem => caseItem.daysInPending > 2);
                    break;
            }
        }

        // Sort cases
        switch (sortBy) {
            case 'newest':
                filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                break;
            case 'oldest':
                filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
                break;
            case 'high_value':
                filtered.sort((a, b) => b.dealValue - a.dealValue);
                break;
            case 'high_commission':
                filtered.sort((a, b) => b.commission - a.commission);
                break;
            case 'urgent':
                filtered.sort((a, b) => {
                    if (a.priority === 'high' && b.priority !== 'high') return -1;
                    if (a.priority !== 'high' && b.priority === 'high') return 1;
                    return a.daysInPending - b.daysInPending;
                });
                break;
        }

        setFilteredCases(filtered);
    }, [searchTerm, priorityFilter, daysFilter, sortBy, cases]);

    // Get priority badge color
    const getPriorityBadge = (priority: string) => {
        switch (priority) {
            case 'high':
                return { 
                    bg: 'bg-danger-light dark:bg-danger-dark-light', 
                    text: 'text-danger', 
                    label: 'High',
                    icon: <IconExclamationTriangle className="w-3 h-3" />
                };
            case 'medium':
                return { 
                    bg: 'bg-warning-light dark:bg-warning-dark-light', 
                    text: 'text-warning', 
                    label: 'Medium',
                    icon: <IconAlertCircle className="w-3 h-3" />
                };
            case 'low':
                return { 
                    bg: 'bg-success-light dark:bg-success-dark-light', 
                    text: 'text-success', 
                    label: 'Low',
                    icon: <IconInfoCircle className="w-3 h-3" />
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

    // Get days pending badge
    const getDaysBadge = (days: number, isOverdue: boolean) => {
        if (isOverdue) {
            return { 
                bg: 'bg-danger-light dark:bg-danger-dark-light', 
                text: 'text-danger', 
                label: 'Overdue'
            };
        }
        if (days === 0) {
            return { 
                bg: 'bg-success-light dark:bg-success-dark-light', 
                text: 'text-success', 
                label: 'Today'
            };
        }
        if (days === 1) {
            return { 
                bg: 'bg-info-light dark:bg-info-dark-light', 
                text: 'text-info', 
                label: 'Yesterday'
            };
        }
        return { 
            bg: 'bg-warning-light dark:bg-warning-dark-light', 
            text: 'text-warning', 
            label: `${days} days`
        };
    };

    // Calculate statistics
    const totalPending = cases.length;
    const overdueCases = cases.filter(c => c.estimatedReviewTime === 'Overdue').length;
    const highPriorityCases = cases.filter(c => c.priority === 'high').length;
    const totalCommission = cases.reduce((sum, caseItem) => sum + caseItem.commission, 0);
    const averageDaysPending = cases.reduce((sum, caseItem) => sum + caseItem.daysInPending, 0) / cases.length;

    // Get status count by review stage
    const reviewStageCounts = cases.reduce((acc, caseItem) => {
        acc[caseItem.reviewStage] = (acc[caseItem.reviewStage] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    // Reminder actions
    const sendReminder = (caseId: string) => {
        // In real app, this would call an API
        alert(`Reminder sent for case ${caseId}`);
    };

    const escalateCase = (caseId: string) => {
        // In real app, this would call an API
        alert(`Case ${caseId} escalated to supervisor`);
    };

    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-xl font-bold">Pending Review Cases</h2>
                    <p className="text-gray-500">Cases awaiting internal team review</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <Link to="/cases/new" className="btn btn-primary gap-2">
                        <IconPlus />
                        New Referral
                    </Link>
                    <button onClick={() => {}} className="btn btn-success gap-2">
                        <IconDownload />
                        Export List
                    </button>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Pending Cases</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{totalPending}</div>
                                <span className="text-warning text-sm font-medium ml-2">Awaiting review</span>
                            </div>
                        </div>
                        <div className="bg-warning/10 p-3 rounded-full">
                            <IconHourglass className="w-8 h-8 text-warning" />
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Overdue Cases</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{overdueCases}</div>
                                <span className="text-danger text-sm font-medium ml-2">Needs escalation</span>
                            </div>
                        </div>
                        <div className="bg-danger/10 p-3 rounded-full">
                            <IconExclamationTriangle className="w-8 h-8 text-danger" />
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">High Priority</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{highPriorityCases}</div>
                                <span className="text-danger text-sm font-medium ml-2">Urgent</span>
                            </div>
                        </div>
                        <div className="bg-danger/10 p-3 rounded-full">
                            <IconAlertCircle className="w-8 h-8 text-danger" />
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Pending Commission</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">${totalCommission.toLocaleString()}</div>
                                <span className="text-success text-sm font-medium ml-2">Potential earnings</span>
                            </div>
                        </div>
                        <div className="bg-success/10 p-3 rounded-full">
                            <IconCreditCard className="w-8 h-8 text-success" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters and Controls */}
            <div className="panel mb-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex-1">
                        <div className="relative max-w-xs">
                            <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search pending cases..."
                                className="form-input pl-10 w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3">
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

                        <select
                            className="form-select w-40"
                            value={daysFilter}
                            onChange={(e) => setDaysFilter(e.target.value)}
                        >
                            <option value="all">All Days</option>
                            <option value="today">Submitted Today</option>
                            <option value="yesterday">Submitted Yesterday</option>
                            <option value="overdue">Overdue Review</option>
                            <option value="more_than_2">More than 2 days</option>
                        </select>

                        <select
                            className="form-select w-40"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                            <option value="high_value">Highest Value</option>
                            <option value="high_commission">Highest Commission</option>
                            <option value="urgent">Most Urgent</option>
                        </select>

                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setPriorityFilter('all');
                                setDaysFilter('all');
                                setSortBy('newest');
                            }}
                            className="btn btn-outline-primary gap-2"
                        >
                            <IconRefresh className="w-4 h-4" />
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {/* Pending Cases Chart */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="panel">
                    <h5 className="font-semibold text-lg mb-5">Cases by Review Stage</h5>
                    <div className="h-80">
                        <ReactApexChart
                            series={Object.values(reviewStageCounts)}
                            options={{
                                chart: {
                                    type: 'donut',
                                    height: 350
                                },
                                labels: Object.keys(reviewStageCounts),
                                colors: ['#4361ee', '#00ab55', '#e2a03f', '#805dca', '#e7515a'],
                                legend: {
                                    position: 'bottom'
                                },
                                plotOptions: {
                                    pie: {
                                        donut: {
                                            size: '65%',
                                            labels: {
                                                show: true,
                                                total: {
                                                    show: true,
                                                    label: 'Total Cases',
                                                    formatter: () => totalPending.toString()
                                                }
                                            }
                                        }
                                    }
                                },
                                dataLabels: {
                                    enabled: false
                                }
                            }}
                            type="donut"
                            height={350}
                        />
                    </div>
                </div>

                <div className="panel">
                    <h5 className="font-semibold text-lg mb-5">Pending Duration Analysis</h5>
                    <div className="h-80">
                        <ReactApexChart
                            series={[{
                                name: 'Cases',
                                data: [
                                    cases.filter(c => c.daysInPending === 0).length,
                                    cases.filter(c => c.daysInPending === 1).length,
                                    cases.filter(c => c.daysInPending === 2).length,
                                    cases.filter(c => c.daysInPending === 3).length,
                                    cases.filter(c => c.daysInPending >= 4).length
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
                                    }
                                },
                                dataLabels: { enabled: false },
                                stroke: {
                                    show: true,
                                    width: 2,
                                    colors: ['transparent']
                                },
                                colors: ['#00ab55', '#4361ee', '#e2a03f', '#e7515a', '#805dca'],
                                xaxis: {
                                    categories: ['0 days (Today)', '1 day', '2 days', '3 days', '4+ days']
                                },
                                yaxis: { 
                                    title: { text: 'Number of Cases' },
                                    min: 0,
                                    max: Math.max(...Object.values(reviewStageCounts)) + 2
                                },
                                fill: { 
                                    opacity: 1,
                                    type: 'gradient',
                                    gradient: {
                                        shade: 'dark',
                                        type: 'vertical',
                                        shadeIntensity: 0.5,
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
            </div>

            {/* Pending Cases Table */}
            <div className="panel">
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg">Pending Cases ({filteredCases.length})</h5>
                    <div className="text-sm text-gray-500">
                        Average pending time: {averageDaysPending.toFixed(1)} days
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
                                    <th>Submitted</th>
                                    <th>Days Pending</th>
                                    <th>Priority</th>
                                    <th>Review Stage</th>
                                    <th>Deal Value</th>
                                    <th>Commission</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCases.length === 0 ? (
                                    <tr>
                                        <td colSpan={10} className="text-center py-8 text-gray-500">
                                            No pending cases found matching your filters
                                        </td>
                                    </tr>
                                ) : (
                                    filteredCases.map((caseItem, index) => {
                                        const priorityBadge = getPriorityBadge(caseItem.priority);
                                        const daysBadge = getDaysBadge(caseItem.daysInPending, caseItem.estimatedReviewTime === 'Overdue');
                                        const isOverdue = caseItem.estimatedReviewTime === 'Overdue';
                                        
                                        return (
                                            <tr key={index} className={`group hover:bg-gray-50 dark:hover:bg-gray-800/50 ${isOverdue ? 'bg-danger-light/20 dark:bg-danger-dark-light/10' : ''}`}>
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
                                                    <div className="text-xs text-gray-500">
                                                        <IconFileText className="w-3 h-3 inline mr-1" />
                                                        {caseItem.documents} docs
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>{caseItem.submittedAt}</div>
                                                    <div className={`text-xs ${isOverdue ? 'text-danger' : 'text-gray-500'}`}>
                                                        {caseItem.estimatedReviewTime}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${daysBadge.bg} ${daysBadge.text}`}>
                                                        <IconClock className="w-3 h-3" />
                                                        <span className="text-xs font-medium">{daysBadge.label}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${priorityBadge.bg} ${priorityBadge.text}`}>
                                                        {priorityBadge.icon}
                                                        <span className="text-xs font-medium">{priorityBadge.label}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="font-medium">{caseItem.reviewStage}</div>
                                                    <div className="text-xs text-gray-500">
                                                        {caseItem.assignedTo === 'Not Assigned' ? 'Awaiting assignment' : `Assigned to: ${caseItem.assignedTo}`}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="font-semibold">${caseItem.dealValue.toLocaleString()}</div>
                                                <div className="text-xs text-gray-500">Potential</div>
                                                </td>
                                                <td>
                                                    <div className="font-semibold text-success">
                                                        ${caseItem.commission.toLocaleString()}
                                                    </div>
                                                    <div className="text-xs text-gray-500">Estimated</div>
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
                                                        
                                                        {isOverdue && (
                                                            <button
                                                                onClick={() => sendReminder(caseItem.id)}
                                                                className="btn btn-warning btn-sm p-1.5"
                                                                title="Send Reminder"
                                                            >
                                                                <IconMail className="w-4 h-4" />
                                                            </button>
                                                        )}
                                                        
                                                        {caseItem.daysInPending > 3 && (
                                                            <button
                                                                onClick={() => escalateCase(caseItem.id)}
                                                                className="btn btn-danger btn-sm p-1.5"
                                                                title="Escalate Case"
                                                            >
                                                                <IconExclamationTriangle className="w-4 h-4" />
                                                            </button>
                                                        )}
                                                        
                                                        <button
                                                            className="btn btn-outline-secondary btn-sm p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                                            title="Add Note"
                                                        >
                                                            <IconEdit className="w-4 h-4" />
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

                {/* Pagination */}
                {filteredCases.length > 0 && (
                    <div className="flex items-center justify-between mt-6">
                        <div className="text-sm text-gray-500">
                            Showing 1 to {Math.min(10, filteredCases.length)} of {filteredCases.length} entries
                        </div>
                        <div className="flex gap-1">
                            <button className="btn btn-outline-primary btn-sm px-3 py-1">Previous</button>
                            <button className="btn btn-primary btn-sm px-3 py-1">1</button>
                            <button className="btn btn-outline-primary btn-sm px-3 py-1">2</button>
                            <button className="btn btn-outline-primary btn-sm px-3 py-1">3</button>
                            <button className="btn btn-outline-primary btn-sm px-3 py-1">Next</button>
                        </div>
                    </div>
                )}
            </div>

            {/* Quick Actions & Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="panel">
                    <h5 className="font-semibold text-lg mb-4">Overdue Cases (Need Action)</h5>
                    <div className="space-y-3">
                        {cases
                            .filter(c => c.estimatedReviewTime === 'Overdue')
                            .map((caseItem) => (
                                <div key={caseItem.id} className="flex items-center justify-between p-3 bg-danger-light dark:bg-danger-dark-light/20 rounded-lg">
                                    <div>
                                        <div className="font-medium">{caseItem.id}</div>
                                        <div className="text-sm text-gray-500">
                                            {caseItem.daysInPending} days pending • {caseItem.serviceType}
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => sendReminder(caseItem.id)}
                                            className="btn btn-danger btn-xs"
                                        >
                                            Remind
                                        </button>
                                        <button
                                            onClick={() => escalateCase(caseItem.id)}
                                            className="btn btn-outline-danger btn-xs"
                                        >
                                            Escalate
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="panel">
                    <h5 className="font-semibold text-lg mb-4">High Value Pending</h5>
                    <div className="space-y-3">
                        {cases
                            .sort((a, b) => b.commission - a.commission)
                            .slice(0, 3)
                            .map((caseItem) => (
                                <div key={caseItem.id} className="flex items-center justify-between p-3 bg-success-light dark:bg-success-dark-light/20 rounded-lg">
                                    <div>
                                        <div className="font-medium">{caseItem.id}</div>
                                        <div className="text-sm text-gray-500">
                                            ${caseItem.commission.toLocaleString()} commission
                                        </div>
                                    </div>
                                    <div className="text-success font-bold">
                                        {caseItem.priority === 'high' ? '🔥' : '💎'}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="panel">
                    <h5 className="font-semibold text-lg mb-4">Review Timeline</h5>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Today's Submissions</span>
                                <span className="font-medium">{cases.filter(c => c.daysInPending === 0).length}</span>
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-success rounded-full"
                                    style={{ width: `${(cases.filter(c => c.daysInPending === 0).length / cases.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>1-2 Days Pending</span>
                                <span className="font-medium">{cases.filter(c => c.daysInPending >= 1 && c.daysInPending <= 2).length}</span>
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-warning rounded-full"
                                    style={{ width: `${(cases.filter(c => c.daysInPending >= 1 && c.daysInPending <= 2).length / cases.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>3+ Days Pending</span>
                                <span className="font-medium">{cases.filter(c => c.daysInPending >= 3).length}</span>
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-danger rounded-full"
                                    style={{ width: `${(cases.filter(c => c.daysInPending >= 3).length / cases.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PendingCases;