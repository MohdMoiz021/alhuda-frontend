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
import IconRefresh from '../../../components/Icon/IconRefresh';
import IconArchive from '../../../components/Icon/IconArchive';
import IconHistory from '../../../components/Icon/IconHistory';
import IconTrendingDown from '../../../components/Icon/IconTrendingDown';
import IconRepeat from '../../../components/Icon/IconRepeat';
import IconFlag from '../../../components/Icon/IconFlag';
import IconChartPie from '../../../components/Icon/IconChartPie';
import IconLock from '../../../components/Icon/IconLock';

const ClosedCases = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Closed Cases - Partner Dashboard'));
    });

    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    // Mock data for closed cases
    const [cases, setCases] = useState([
        {
            id: 'ALH-2024-00155',
            clientName: 'Ahmed Al-Masri',
            company: 'Masri Trading Co.',
            serviceType: 'Business Account Opening',
            status: 'closed',
            statusLabel: 'Closed',
            closeType: 'completed',
            closeReason: 'Successfully opened business account',
            priority: 'medium',
            submittedDate: '2024-01-05',
            approvedDate: '2024-01-10',
            closedDate: '2024-01-15',
            processingDays: 10,
            totalDays: 10,
            dealValue: 20000,
            commission: 3000,
            commissionPaid: true,
            commissionPaidDate: '2024-01-25',
            commissionAmount: 3000,
            documents: 5,
            assignedTo: 'Sarah Johnson',
            clientSatisfaction: 5,
            notes: 'Client satisfied with service',
            tags: ['Completed', 'High Satisfaction'],
            archived: false
        },
        {
            id: 'ALH-2024-00156',
            clientName: 'Fatima Al-Khalifa',
            company: 'Khalifa Investments',
            serviceType: 'Project Funding',
            status: 'closed',
            statusLabel: 'Closed',
            closeType: 'rejected',
            closeReason: 'Client withdrew application',
            priority: 'high',
            submittedDate: '2024-01-10',
            approvedDate: null,
            closedDate: '2024-01-20',
            processingDays: 10,
            totalDays: 10,
            dealValue: 500000,
            commission: 0,
            commissionPaid: false,
            commissionPaidDate: null,
            commissionAmount: 0,
            documents: 8,
            assignedTo: 'Michael Chen',
            clientSatisfaction: 3,
            notes: 'Client decided to pursue alternative funding',
            tags: ['Rejected', 'Client Withdrew'],
            archived: true
        },
        {
            id: 'ALH-2024-00157',
            clientName: 'Khalid Al-Harbi',
            company: 'Harbi Construction',
            serviceType: 'Trade Facilities (BG)',
            status: 'closed',
            statusLabel: 'Closed',
            closeType: 'completed',
            closeReason: 'Bank guarantee issued successfully',
            priority: 'medium',
            submittedDate: '2024-01-12',
            approvedDate: '2024-01-18',
            closedDate: '2024-01-25',
            processingDays: 13,
            totalDays: 13,
            dealValue: 120000,
            commission: 6000,
            commissionPaid: true,
            commissionPaidDate: '2024-02-05',
            commissionAmount: 6000,
            documents: 5,
            assignedTo: 'Robert Williams',
            clientSatisfaction: 4,
            notes: 'Standard bank guarantee process',
            tags: ['Completed', 'Bank Guarantee'],
            archived: false
        },
        {
            id: 'ALH-2024-00158',
            clientName: 'Layla Al-Qasimi',
            company: 'Qasimi Retail',
            serviceType: 'Sukuk Funding',
            status: 'closed',
            statusLabel: 'Closed',
            closeType: 'rejected',
            closeReason: 'Insufficient collateral',
            priority: 'medium',
            submittedDate: '2024-01-08',
            approvedDate: null,
            closedDate: '2024-01-22',
            processingDays: 14,
            totalDays: 14,
            dealValue: 300000,
            commission: 0,
            commissionPaid: false,
            commissionPaidDate: null,
            commissionAmount: 0,
            documents: 7,
            assignedTo: 'Sarah Johnson',
            clientSatisfaction: 2,
            notes: 'Client could not provide required collateral',
            tags: ['Rejected', 'Insufficient Collateral'],
            archived: false
        },
        {
            id: 'ALH-2024-00159',
            clientName: 'Omar Al-Farsi',
            company: 'Farsi Logistics',
            serviceType: 'Business Account Opening',
            status: 'closed',
            statusLabel: 'Closed',
            closeType: 'cancelled',
            closeReason: 'Duplicate application',
            priority: 'low',
            submittedDate: '2024-01-15',
            approvedDate: null,
            closedDate: '2024-01-18',
            processingDays: 3,
            totalDays: 3,
            dealValue: 25000,
            commission: 0,
            commissionPaid: false,
            commissionPaidDate: null,
            commissionAmount: 0,
            documents: 4,
            assignedTo: 'Michael Chen',
            clientSatisfaction: null,
            notes: 'Client submitted duplicate application',
            tags: ['Cancelled', 'Duplicate'],
            archived: true
        },
        {
            id: 'ALH-2024-00160',
            clientName: 'Noura Al-Shehhi',
            company: 'Shehhi Holdings',
            serviceType: 'Project Funding',
            status: 'closed',
            statusLabel: 'Closed',
            closeType: 'completed',
            closeReason: 'Project funding approved and disbursed',
            priority: 'high',
            submittedDate: '2023-12-20',
            approvedDate: '2024-01-05',
            closedDate: '2024-01-30',
            processingDays: 41,
            totalDays: 41,
            dealValue: 750000,
            commission: 37500,
            commissionPaid: true,
            commissionPaidDate: '2024-02-15',
            commissionAmount: 37500,
            documents: 12,
            assignedTo: 'Sarah Johnson',
            clientSatisfaction: 5,
            notes: 'Large infrastructure project completed successfully',
            tags: ['Completed', 'High Value', 'Infrastructure'],
            archived: false
        },
        {
            id: 'ALH-2024-00161',
            clientName: 'Salem Al-Ghamdi',
            company: 'Ghamdi Manufacturing',
            serviceType: 'Other Custom Services',
            status: 'closed',
            statusLabel: 'Closed',
            closeType: 'expired',
            closeReason: 'Client did not respond within timeline',
            priority: 'medium',
            submittedDate: '2024-01-03',
            approvedDate: null,
            closedDate: '2024-01-31',
            processingDays: 28,
            totalDays: 28,
            dealValue: 120000,
            commission: 0,
            commissionPaid: false,
            commissionPaidDate: null,
            commissionAmount: 0,
            documents: 9,
            assignedTo: 'Robert Williams',
            clientSatisfaction: null,
            notes: 'Multiple follow-ups sent, no response from client',
            tags: ['Expired', 'No Response'],
            archived: true
        },
        {
            id: 'ALH-2024-00162',
            clientName: 'Rashid Al-Otaibi',
            company: 'Otaibi Trading',
            serviceType: 'Trade Facilities (LC)',
            status: 'closed',
            statusLabel: 'Closed',
            closeType: 'completed',
            closeReason: 'Letter of credit issued',
            priority: 'medium',
            submittedDate: '2023-12-15',
            approvedDate: '2023-12-28',
            closedDate: '2024-01-10',
            processingDays: 26,
            totalDays: 26,
            dealValue: 90000,
            commission: 4500,
            commissionPaid: true,
            commissionPaidDate: '2024-01-30',
            commissionAmount: 4500,
            documents: 8,
            assignedTo: 'Michael Chen',
            clientSatisfaction: 4,
            notes: 'International trade transaction completed',
            tags: ['Completed', 'International', 'Trade'],
            archived: false
        }
    ]);

    const [filteredCases, setFilteredCases] = useState(cases);
    const [searchTerm, setSearchTerm] = useState('');
    const [closeTypeFilter, setCloseTypeFilter] = useState('all');
    const [archivedFilter, setArchivedFilter] = useState('all');
    const [dateRange, setDateRange] = useState({ start: '', end: '' });
    const [sortBy, setSortBy] = useState('recent');
    const [selectedTimeframe, setSelectedTimeframe] = useState('month');

    // Filter cases based on search and filters
    useEffect(() => {
        let filtered = [...cases];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(caseItem =>
                caseItem.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                caseItem.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                caseItem.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                caseItem.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                caseItem.closeReason.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Close type filter
        if (closeTypeFilter !== 'all') {
            filtered = filtered.filter(caseItem => caseItem.closeType === closeTypeFilter);
        }

        // Archived filter
        if (archivedFilter !== 'all') {
            filtered = filtered.filter(caseItem => 
                archivedFilter === 'archived' ? caseItem.archived : !caseItem.archived
            );
        }

        // Date range filter
        if (dateRange.start && dateRange.end) {
            filtered = filtered.filter(caseItem => {
                const closedDate = new Date(caseItem.closedDate);
                const startDate = new Date(dateRange.start);
                const endDate = new Date(dateRange.end);
                return closedDate >= startDate && closedDate <= endDate;
            });
        }

        // Timeframe filter
        if (selectedTimeframe !== 'all') {
            const now = new Date();
            let startDate = new Date();
            
            switch (selectedTimeframe) {
                case 'week':
                    startDate.setDate(now.getDate() - 7);
                    break;
                case 'month':
                    startDate.setMonth(now.getMonth() - 1);
                    break;
                case 'quarter':
                    startDate.setMonth(now.getMonth() - 3);
                    break;
                case 'year':
                    startDate.setFullYear(now.getFullYear() - 1);
                    break;
            }
            
            filtered = filtered.filter(caseItem => {
                const closedDate = new Date(caseItem.closedDate);
                return closedDate >= startDate;
            });
        }

        // Sort cases
        switch (sortBy) {
            case 'recent':
                filtered.sort((a, b) => new Date(b.closedDate).getTime() - new Date(a.closedDate).getTime());
                break;
            case 'oldest':
                filtered.sort((a, b) => new Date(a.closedDate).getTime() - new Date(b.closedDate).getTime());
                break;
            case 'high_value':
                filtered.sort((a, b) => b.dealValue - a.dealValue);
                break;
            case 'high_commission':
                filtered.sort((a, b) => b.commissionAmount - a.commissionAmount);
                break;
            case 'longest':
                filtered.sort((a, b) => b.totalDays - a.totalDays);
                break;
        }

        setFilteredCases(filtered);
    }, [searchTerm, closeTypeFilter, archivedFilter, dateRange, sortBy, selectedTimeframe, cases]);

    // Calculate statistics
    const totalClosed = cases.length;
    const completedCases = cases.filter(c => c.closeType === 'completed').length;
    const rejectedCases = cases.filter(c => c.closeType === 'rejected').length;
    const otherClosed = totalClosed - completedCases - rejectedCases;
    const totalCommission = cases.reduce((sum, caseItem) => sum + caseItem.commissionAmount, 0);
    const averageProcessingDays = cases.reduce((sum, caseItem) => sum + caseItem.processingDays, 0) / cases.length;
    const archivedCases = cases.filter(c => c.archived).length;

    // Get close type badge
    const getCloseTypeBadge = (closeType: string) => {
        switch (closeType) {
            case 'completed':
                return { 
                    bg: 'bg-success-light dark:bg-success-dark-light', 
                    text: 'text-success', 
                    label: 'Completed',
                    icon: <IconCheckCircle className="w-3 h-3" />
                };
            case 'rejected':
                return { 
                    bg: 'bg-danger-light dark:bg-danger-dark-light', 
                    text: 'text-danger', 
                    label: 'Rejected',
                    icon: <IconXCircle className="w-3 h-3" />
                };
            case 'cancelled':
                return { 
                    bg: 'bg-warning-light dark:bg-warning-dark-light', 
                    text: 'text-warning', 
                    label: 'Cancelled',
                    icon: <IconAlertCircle className="w-3 h-3" />
                };
            case 'expired':
                return { 
                    bg: 'bg-secondary-light dark:bg-secondary-dark-light', 
                    text: 'text-secondary', 
                    label: 'Expired',
                    icon: <IconClock className="w-3 h-3" />
                };
            default:
                return { 
                    bg: 'bg-gray-100 dark:bg-gray-800', 
                    text: 'text-gray-600 dark:text-gray-400', 
                    label: 'Closed',
                    icon: null
                };
        }
    };

    // Get archived badge
    const getArchivedBadge = (archived: boolean) => {
        if (archived) {
            return { 
                bg: 'bg-primary-light dark:bg-primary-dark-light', 
                text: 'text-primary', 
                label: 'Archived',
                icon: <IconArchive className="w-3 h-3" />
            };
        } else {
            return { 
                bg: 'bg-gray-100 dark:bg-gray-800', 
                text: 'text-gray-600 dark:text-gray-400', 
                label: 'Active',
                icon: null
            };
        }
    };

    // Get satisfaction stars
    const getSatisfactionStars = (rating: number | null) => {
        if (rating === null) return <span className="text-gray-400 text-xs">N/A</span>;
        
        return (
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span 
                        key={star} 
                        className={`text-xs ${star <= rating ? 'text-warning' : 'text-gray-300 dark:text-gray-600'}`}
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };

    // Archive/Unarchive case
    const toggleArchive = (caseId: string) => {
        setCases(cases.map(caseItem => 
            caseItem.id === caseId 
                ? { ...caseItem, archived: !caseItem.archived }
                : caseItem
        ));
    };

    // Reopen case
    const reopenCase = (caseId: string) => {
        if (confirm('Are you sure you want to reopen this case? It will be moved back to active cases.')) {
            // In real app, this would call an API
            alert(`Case ${caseId} reopened`);
        }
    };

    // Export to CSV
    const exportToCSV = () => {
        const headers = ['Case ID', 'Client Name', 'Service Type', 'Close Type', 'Closed Date', 'Deal Value', 'Commission', 'Processing Days', 'Close Reason'];
        const csvData = filteredCases.map(caseItem => [
            caseItem.id,
            caseItem.clientName,
            caseItem.serviceType,
            caseItem.closeType,
            caseItem.closedDate,
            `$${caseItem.dealValue.toLocaleString()}`,
            `$${caseItem.commissionAmount.toLocaleString()}`,
            caseItem.processingDays,
            caseItem.closeReason
        ]);

        const csvContent = [
            headers.join(','),
            ...csvData.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `closed_cases_export_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    // Prepare data for charts
    const closeTypeData = [
        { type: 'Completed', value: completedCases, color: '#00ab55' },
        { type: 'Rejected', value: rejectedCases, color: '#e7515a' },
        { type: 'Other', value: otherClosed, color: '#e2a03f' }
    ];

    const monthlyClosedData = [
        { month: 'Oct 2023', closed: 5, completed: 3 },
        { month: 'Nov 2023', closed: 8, completed: 5 },
        { month: 'Dec 2023', closed: 12, completed: 8 },
        { month: 'Jan 2024', closed: cases.length, completed: completedCases }
    ];

    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-xl font-bold">Closed Cases</h2>
                    <p className="text-gray-500">Archive and review of completed, rejected, or expired cases</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <button onClick={exportToCSV} className="btn btn-success gap-2">
                        <IconDownload />
                        Export Report
                    </button>
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
                            <h5 className="font-semibold text-lg">Total Closed</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{totalClosed}</div>
                                <span className="text-gray-500 text-sm font-medium ml-2">cases</span>
                            </div>
                        </div>
                        <div className="bg-secondary/10 p-3 rounded-full">
                            <IconArchive className="w-8 h-8 text-secondary" />
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Completed</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{completedCases}</div>
                                <span className="text-success text-sm font-medium ml-2">{((completedCases/totalClosed)*100).toFixed(0)}% rate</span>
                            </div>
                        </div>
                        <div className="bg-success/10 p-3 rounded-full">
                            <IconCheckCircle className="w-8 h-8 text-success" />
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Earned Commission</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">${totalCommission.toLocaleString()}</div>
                                <span className="text-success text-sm font-medium ml-2">from closed</span>
                            </div>
                        </div>
                        <div className="bg-primary/10 p-3 rounded-full">
                            <IconCreditCard className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Avg Processing</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{averageProcessingDays.toFixed(1)} days</div>
                                <span className="text-info text-sm font-medium ml-2">per case</span>
                            </div>
                        </div>
                        <div className="bg-info/10 p-3 rounded-full">
                            <IconClock className="w-8 h-8 text-info" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeframe Selector */}
            <div className="panel mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="font-semibold text-lg">Closure Analysis</h5>
                    <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                        <button
                            onClick={() => setSelectedTimeframe('week')}
                            className={`px-3 py-1 rounded text-sm ${selectedTimeframe === 'week' ? 'bg-white dark:bg-gray-900 shadow' : 'text-gray-500'}`}
                        >
                            This Week
                        </button>
                        <button
                            onClick={() => setSelectedTimeframe('month')}
                            className={`px-3 py-1 rounded text-sm ${selectedTimeframe === 'month' ? 'bg-white dark:bg-gray-900 shadow' : 'text-gray-500'}`}
                        >
                            This Month
                        </button>
                        <button
                            onClick={() => setSelectedTimeframe('quarter')}
                            className={`px-3 py-1 rounded text-sm ${selectedTimeframe === 'quarter' ? 'bg-white dark:bg-gray-900 shadow' : 'text-gray-500'}`}
                        >
                            This Quarter
                        </button>
                        <button
                            onClick={() => setSelectedTimeframe('year')}
                            className={`px-3 py-1 rounded text-sm ${selectedTimeframe === 'year' ? 'bg-white dark:bg-gray-900 shadow' : 'text-gray-500'}`}
                        >
                            This Year
                        </button>
                        <button
                            onClick={() => setSelectedTimeframe('all')}
                            className={`px-3 py-1 rounded text-sm ${selectedTimeframe === 'all' ? 'bg-white dark:bg-gray-900 shadow' : 'text-gray-500'}`}
                        >
                            All Time
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-success-light dark:bg-success-dark-light/20 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <h6 className="font-medium text-success">Completion Rate</h6>
                                <div className="text-2xl font-bold mt-2">
                                    {totalClosed > 0 ? ((completedCases/totalClosed)*100).toFixed(1) : 0}%
                                </div>
                            </div>
                            <IconTrendingDown className="w-8 h-8 text-success" />
                        </div>
                    </div>
                    
                    <div className="bg-danger-light dark:bg-danger-dark-light/20 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <h6 className="font-medium text-danger">Rejection Rate</h6>
                                <div className="text-2xl font-bold mt-2">
                                    {totalClosed > 0 ? ((rejectedCases/totalClosed)*100).toFixed(1) : 0}%
                                </div>
                            </div>
                            <IconXCircle className="w-8 h-8 text-danger" />
                        </div>
                    </div>
                    
                    <div className="bg-primary-light dark:bg-primary-dark-light/20 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <h6 className="font-medium text-primary">Archived Cases</h6>
                                <div className="text-2xl font-bold mt-2">{archivedCases}</div>
                            </div>
                            <IconArchive className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="panel">
                    <h5 className="font-semibold text-lg mb-5">Closure Type Distribution</h5>
                    <div className="h-80">
                        <ReactApexChart
                            series={closeTypeData.map(item => item.value)}
                            options={{
                                chart: {
                                    type: 'donut',
                                    height: 350
                                },
                                labels: closeTypeData.map(item => item.type),
                                colors: closeTypeData.map(item => item.color),
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
                                                    label: 'Total Closed',
                                                    formatter: () => totalClosed.toString()
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
                    <h5 className="font-semibold text-lg mb-5">Monthly Closure Trend</h5>
                    <div className="h-80">
                        <ReactApexChart
                            series={[
                                {
                                    name: 'Total Closed',
                                    type: 'column',
                                    data: monthlyClosedData.map(m => m.closed)
                                },
                                {
                                    name: 'Completed',
                                    type: 'line',
                                    data: monthlyClosedData.map(m => m.completed)
                                }
                            ]}
                            options={{
                                chart: {
                                    height: 350,
                                    type: 'line',
                                    toolbar: { show: false }
                                },
                                stroke: {
                                    width: [0, 3]
                                },
                                colors: ['#4361ee', '#00ab55'],
                                dataLabels: {
                                    enabled: false
                                },
                                xaxis: {
                                    categories: monthlyClosedData.map(m => m.month)
                                },
                                yaxis: [
                                    {
                                        title: {
                                            text: 'Number of Cases'
                                        }
                                    }
                                ],
                                legend: {
                                    position: 'top'
                                },
                                fill: {
                                    opacity: [0.85, 1]
                                }
                            }}
                            type="line"
                            height={350}
                        />
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
                                placeholder="Search closed cases..."
                                className="form-input pl-10 w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3">
                        <select
                            className="form-select w-40"
                            value={closeTypeFilter}
                            onChange={(e) => setCloseTypeFilter(e.target.value)}
                        >
                            <option value="all">All Closure Types</option>
                            <option value="completed">Completed</option>
                            <option value="rejected">Rejected</option>
                            <option value="cancelled">Cancelled</option>
                            <option value="expired">Expired</option>
                        </select>

                        <select
                            className="form-select w-40"
                            value={archivedFilter}
                            onChange={(e) => setArchivedFilter(e.target.value)}
                        >
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="archived">Archived</option>
                        </select>

                        <select
                            className="form-select w-40"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="recent">Recently Closed</option>
                            <option value="oldest">Oldest First</option>
                            <option value="high_value">Highest Value</option>
                            <option value="high_commission">Highest Commission</option>
                            <option value="longest">Longest Processing</option>
                        </select>

                        <div className="flex items-center gap-2">
                            <input
                                type="date"
                                className="form-input"
                                value={dateRange.start}
                                onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                                placeholder="From"
                            />
                            <span>to</span>
                            <input
                                type="date"
                                className="form-input"
                                value={dateRange.end}
                                onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                                placeholder="To"
                            />
                        </div>

                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setCloseTypeFilter('all');
                                setArchivedFilter('all');
                                setDateRange({ start: '', end: '' });
                                setSortBy('recent');
                                setSelectedTimeframe('month');
                            }}
                            className="btn btn-outline-primary gap-2"
                        >
                            <IconRefresh className="w-4 h-4" />
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {/* Closed Cases Table */}
            <div className="panel">
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg">Closed Cases ({filteredCases.length})</h5>
                    <div className="text-sm text-gray-500">
                        Showing {filteredCases.length} of {totalClosed} closed cases
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
                                    <th>Closure Type</th>
                                    <th>Closed Date</th>
                                    <th>Processing Days</th>
                                    <th>Satisfaction</th>
                                    <th>Deal Value</th>
                                    <th>Commission</th>
                                    <th>Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCases.length === 0 ? (
                                    <tr>
                                        <td colSpan={11} className="text-center py-8 text-gray-500">
                                            No closed cases found matching your filters
                                        </td>
                                    </tr>
                                ) : (
                                    filteredCases.map((caseItem, index) => {
                                        const closeTypeBadge = getCloseTypeBadge(caseItem.closeType);
                                        const archivedBadge = getArchivedBadge(caseItem.archived);
                                        const processingClass = caseItem.processingDays <= 10 ? 'text-success' : 
                                                              caseItem.processingDays <= 20 ? 'text-warning' : 'text-danger';
                                        
                                        return (
                                            <tr key={index} className={`group hover:bg-gray-50 dark:hover:bg-gray-800/50 ${caseItem.archived ? 'opacity-75' : ''}`}>
                                                <td className="!px-3">
                                                    <div className="font-semibold text-primary hover:underline cursor-pointer">
                                                        {caseItem.id}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        Submitted: {caseItem.submittedDate}
                                                    </div>
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
                                                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${closeTypeBadge.bg} ${closeTypeBadge.text}`}>
                                                        {closeTypeBadge.icon}
                                                        <span className="text-xs font-medium">{closeTypeBadge.label}</span>
                                                    </div>
                                                    <div className="text-xs text-gray-500 mt-1 truncate max-w-[150px]">
                                                        {caseItem.closeReason}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>{caseItem.closedDate}</div>
                                                    {caseItem.approvedDate && (
                                                        <div className="text-xs text-gray-500">
                                                            Approved: {caseItem.approvedDate}
                                                        </div>
                                                    )}
                                                </td>
                                                <td>
                                                    <div className={`font-medium ${processingClass}`}>
                                                        {caseItem.processingDays} days
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        Total: {caseItem.totalDays} days
                                                    </div>
                                                </td>
                                                <td>
                                                    {getSatisfactionStars(caseItem.clientSatisfaction)}
                                                    {caseItem.clientSatisfaction !== null && (
                                                        <div className="text-xs text-gray-500">
                                                            {caseItem.clientSatisfaction}/5
                                                        </div>
                                                    )}
                                                </td>
                                                <td>
                                                    <div className="font-semibold">${caseItem.dealValue.toLocaleString()}</div>
                                                </td>
                                                <td>
                                                    <div className={`font-bold ${caseItem.commissionAmount > 0 ? 'text-success' : 'text-gray-500'}`}>
                                                        ${caseItem.commissionAmount.toLocaleString()}
                                                    </div>
                                                    {caseItem.commissionPaidDate && (
                                                        <div className="text-xs text-gray-500">
                                                            Paid: {caseItem.commissionPaidDate}
                                                        </div>
                                                    )}
                                                </td>
                                                <td>
                                                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${archivedBadge.bg} ${archivedBadge.text}`}>
                                                        {archivedBadge.icon}
                                                        <span className="text-xs font-medium">{archivedBadge.label}</span>
                                                    </div>
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
                                                        
                                                        <button
                                                            onClick={() => toggleArchive(caseItem.id)}
                                                            className={`btn btn-sm p-1.5 ${caseItem.archived ? 'btn-outline-success' : 'btn-outline-secondary'}`}
                                                            title={caseItem.archived ? 'Unarchive' : 'Archive'}
                                                        >
                                                            <IconArchive className="w-4 h-4" />
                                                        </button>
                                                        
                                                        {caseItem.closeType !== 'completed' && (
                                                            <button
                                                                onClick={() => reopenCase(caseItem.id)}
                                                                className="btn btn-outline-warning btn-sm p-1.5"
                                                                title="Reopen Case"
                                                            >
                                                                <IconRepeat className="w-4 h-4" />
                                                            </button>
                                                        )}
                                                        
                                                        {caseItem.tags.length > 0 && (
                                                            <Dropdown
                                                                placement="bottom-end"
                                                                btnClassName="btn btn-outline-info btn-sm p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                                                button={<IconHorizontalDots className="w-4 h-4" />}
                                                            >
                                                                <ul className="text-sm">
                                                                    <li className="px-4 py-2 font-medium">Tags:</li>
                                                                    {caseItem.tags.map((tag, tagIndex) => (
                                                                        <li key={tagIndex} className="px-4 py-1">
                                                                            <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                                                                                {tag}
                                                                            </span>
                                                                        </li>
                                                                    ))}
                                                                    <li className="border-t mt-2 pt-2">
                                                                        <button className="w-full text-left px-4 py-2 text-danger hover:bg-danger-light dark:hover:bg-danger-dark-light">
                                                                            <IconTrashLines className="w-4 h-4 inline mr-2" />
                                                                            Delete Permanently
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </Dropdown>
                                                        )}
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

                {/* Bulk Actions */}
                {filteredCases.length > 0 && (
                    <div className="flex items-center justify-between mt-6">
                        <div className="text-sm text-gray-500">
                            {filteredCases.filter(c => !c.archived).length} active, {filteredCases.filter(c => c.archived).length} archived
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    if (confirm('Archive all visible cases?')) {
                                        setCases(cases.map(c => 
                                            filteredCases.some(fc => fc.id === c.id) ? { ...c, archived: true } : c
                                        ));
                                    }
                                }}
                                className="btn btn-outline-primary btn-sm"
                            >
                                <IconArchive className="w-4 h-4 mr-2" />
                                Archive All
                            </button>
                            <button
                                onClick={exportToCSV}
                                className="btn btn-outline-success btn-sm"
                            >
                                <IconDownload className="w-4 h-4 mr-2" />
                                Export Selected
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Summary Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="panel">
                    <h5 className="font-semibold text-lg mb-4">Top Completed Cases</h5>
                    <div className="space-y-3">
                        {cases
                            .filter(c => c.closeType === 'completed')
                            .sort((a, b) => b.commissionAmount - a.commissionAmount)
                            .slice(0, 3)
                            .map((caseItem) => (
                                <div key={caseItem.id} className="flex items-center justify-between p-3 bg-success-light dark:bg-success-dark-light/20 rounded-lg">
                                    <div>
                                        <div className="font-medium">{caseItem.id}</div>
                                        <div className="text-sm text-gray-500">
                                            ${caseItem.commissionAmount.toLocaleString()} earned
                                        </div>
                                    </div>
                                    <div className="text-success font-bold">
                                        {caseItem.clientSatisfaction}/5
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="panel">
                    <h5 className="font-semibold text-lg mb-4">Rejection Analysis</h5>
                    <div className="space-y-3">
                        {cases
                            .filter(c => c.closeType === 'rejected')
                            .map((caseItem) => (
                                <div key={caseItem.id} className="flex items-center justify-between p-3 bg-danger-light dark:bg-danger-dark-light/20 rounded-lg">
                                    <div>
                                        <div className="font-medium">{caseItem.id}</div>
                                        <div className="text-sm text-gray-500 truncate max-w-[180px]">
                                            {caseItem.closeReason}
                                        </div>
                                    </div>
                                    <div className="text-danger">
                                        <IconFlag className="w-4 h-4" />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="panel">
                    <h5 className="font-semibold text-lg mb-4">Performance Summary</h5>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Completion Rate</span>
                                <span className="font-medium">
                                    {totalClosed > 0 ? ((completedCases/totalClosed)*100).toFixed(1) : 0}%
                                </span>
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-success rounded-full"
                                    style={{ width: `${(completedCases/totalClosed)*100}%` }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Average Processing Time</span>
                                <span className="font-medium">{averageProcessingDays.toFixed(1)} days</span>
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-info rounded-full"
                                    style={{ width: `${Math.min(100, averageProcessingDays/30*100)}%` }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span>Commission Efficiency</span>
                                <span className="font-medium">
                                    ${totalClosed > 0 ? (totalCommission/totalClosed).toFixed(0) : 0}/case
                                </span>
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-primary rounded-full"
                                    style={{ width: `${Math.min(100, totalCommission/(completedCases*10000)*100)}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClosedCases;