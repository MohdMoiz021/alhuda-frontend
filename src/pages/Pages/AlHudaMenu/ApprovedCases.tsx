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
import IconCheckCircle from '../../../components/Icon/IconCheckCircle';
import IconXCircle from '../../../components/Icon/IconXCircle';
import IconAlertCircle from '../../../components/Icon/IconAlertCircle';
import IconRefresh from '../../../components/Icon/IconRefresh';
import IconTrendingUp from '../../../components/Icon/IconTrendingUp';
import IconDollarSign from '../../../components/Icon/IconDollarSign';
import IconUsers from '../../../components/Icon/IconUsers';
import IconChartBar from '../../../components/Icon/IconChartBar';
import IconStar from '../../../components/Icon/IconStar';
import IconActivity from '../../../components/Icon/IconActivity';
import IconShare from '../../../components/Icon/IconShare';
import IconPrinter from '../../../components/Icon/IconPrinter';

const ApprovedCases = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Approved Cases - Partner Dashboard'));
    });

    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    // Mock data for approved cases
    const [cases, setCases] = useState([
        {
            id: 'ALH-2024-00147',
            clientName: 'Mohammed Al-Rashid',
            company: 'Rashid Trading',
            serviceType: 'Business Account Opening',
            status: 'approved',
            statusLabel: 'Approved',
            priority: 'medium',
            submittedDate: '2024-01-20',
            approvedDate: '2024-01-22',
            completionDate: '2024-01-25',
            processingDays: 5,
            dealValue: 20000,
            commission: 3000,
            commissionPaid: true,
            commissionPaidDate: '2024-01-30',
            commissionAmount: 3000,
            documents: 5,
            assignedTo: 'Sarah Johnson',
            clientSatisfaction: 5,
            notes: 'Client was very satisfied with the service',
            tags: ['Quick Processing', 'High Value']
        },
        {
            id: 'ALH-2024-00148',
            clientName: 'Fatima Al-Zahra',
            company: 'Zahra Cosmetics',
            serviceType: 'Trade Facilities (LC)',
            status: 'approved',
            statusLabel: 'Approved',
            priority: 'high',
            submittedDate: '2024-01-18',
            approvedDate: '2024-01-21',
            completionDate: '2024-01-28',
            processingDays: 10,
            dealValue: 150000,
            commission: 7500,
            commissionPaid: true,
            commissionPaidDate: '2024-02-05',
            commissionAmount: 7500,
            documents: 8,
            assignedTo: 'Michael Chen',
            clientSatisfaction: 4,
            notes: 'Required additional documentation but processed smoothly',
            tags: ['Trade', 'High Commission']
        },
        {
            id: 'ALH-2024-00149',
            clientName: 'Khalid Al-Omari',
            company: 'Omari Constructions',
            serviceType: 'Project Funding',
            status: 'approved',
            statusLabel: 'Approved',
            priority: 'high',
            submittedDate: '2024-01-15',
            approvedDate: '2024-01-25',
            completionDate: '2024-02-10',
            processingDays: 26,
            dealValue: 750000,
            commission: 37500,
            commissionPaid: false,
            commissionPaidDate: 'Pending',
            commissionAmount: 37500,
            documents: 12,
            assignedTo: 'Sarah Johnson',
            clientSatisfaction: 5,
            notes: 'Large project with multiple funding stages',
            tags: ['Project', 'Long Term', 'High Value']
        },
        {
            id: 'ALH-2024-00150',
            clientName: 'Layla Al-Mansoor',
            company: 'Mansoor Retail',
            serviceType: 'Sukuk Funding',
            status: 'approved',
            statusLabel: 'Approved',
            priority: 'medium',
            submittedDate: '2024-01-10',
            approvedDate: '2024-01-18',
            completionDate: '2024-01-30',
            processingDays: 20,
            dealValue: 300000,
            commission: 15000,
            commissionPaid: true,
            commissionPaidDate: '2024-02-10',
            commissionAmount: 15000,
            documents: 7,
            assignedTo: 'Robert Williams',
            clientSatisfaction: 4,
            notes: 'Islamic financing arrangement',
            tags: ['Sukuk', 'Islamic Finance']
        },
        {
            id: 'ALH-2024-00151',
            clientName: 'Omar Al-Farsi',
            company: 'Farsi Logistics',
            serviceType: 'Trade Facilities (BG)',
            status: 'approved',
            statusLabel: 'Approved',
            priority: 'low',
            submittedDate: '2024-01-05',
            approvedDate: '2024-01-10',
            completionDate: '2024-01-15',
            processingDays: 10,
            dealValue: 80000,
            commission: 4000,
            commissionPaid: true,
            commissionPaidDate: '2024-01-25',
            commissionAmount: 4000,
            documents: 6,
            assignedTo: 'Robert Williams',
            clientSatisfaction: 5,
            notes: 'Quick turnaround for bank guarantee',
            tags: ['Quick Processing', 'Bank Guarantee']
        },
        {
            id: 'ALH-2024-00152',
            clientName: 'Noura Al-Shehhi',
            company: 'Shehhi Investments',
            serviceType: 'Business Account Opening',
            status: 'approved',
            statusLabel: 'Approved',
            priority: 'medium',
            submittedDate: '2024-01-03',
            approvedDate: '2024-01-08',
            completionDate: '2024-01-12',
            processingDays: 9,
            dealValue: 25000,
            commission: 3750,
            commissionPaid: true,
            commissionPaidDate: '2024-01-20',
            commissionAmount: 3750,
            documents: 4,
            assignedTo: 'Michael Chen',
            clientSatisfaction: 3,
            notes: 'Standard account opening process',
            tags: ['Standard', 'Quick']
        },
        {
            id: 'ALH-2024-00153',
            clientName: 'Salem Al-Ghamdi',
            company: 'Ghamdi Manufacturing',
            serviceType: 'Other Custom Services',
            status: 'approved',
            statusLabel: 'Approved',
            priority: 'high',
            submittedDate: '2023-12-28',
            approvedDate: '2024-01-05',
            completionDate: '2024-01-20',
            processingDays: 23,
            dealValue: 120000,
            commission: 6000,
            commissionPaid: true,
            commissionPaidDate: '2024-01-30',
            commissionAmount: 6000,
            documents: 9,
            assignedTo: 'Sarah Johnson',
            clientSatisfaction: 5,
            notes: 'Custom financing solution for manufacturing equipment',
            tags: ['Custom', 'Manufacturing', 'Equipment']
        },
        {
            id: 'ALH-2024-00154',
            clientName: 'Rashid Al-Otaibi',
            company: 'Otaibi Trading',
            serviceType: 'Trade Facilities (LC)',
            status: 'approved',
            statusLabel: 'Approved',
            priority: 'medium',
            submittedDate: '2023-12-20',
            approvedDate: '2023-12-28',
            completionDate: '2024-01-10',
            processingDays: 21,
            dealValue: 90000,
            commission: 4500,
            commissionPaid: false,
            commissionPaidDate: 'Pending',
            commissionAmount: 4500,
            documents: 8,
            assignedTo: 'Michael Chen',
            clientSatisfaction: 4,
            notes: 'Letter of credit for international trade',
            tags: ['International', 'Trade']
        }
    ]);

    const [filteredCases, setFilteredCases] = useState(cases);
    const [searchTerm, setSearchTerm] = useState('');
    const [serviceTypeFilter, setServiceTypeFilter] = useState('all');
    const [commissionFilter, setCommissionFilter] = useState('all');
    const [dateRange, setDateRange] = useState({ start: '', end: '' });
    const [sortBy, setSortBy] = useState('recent');
    const [selectedTimeframe, setSelectedTimeframe] = useState('month'); // month, quarter, year, all

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
                caseItem.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Service type filter
        if (serviceTypeFilter !== 'all') {
            filtered = filtered.filter(caseItem => caseItem.serviceType === serviceTypeFilter);
        }

        // Commission status filter
        if (commissionFilter !== 'all') {
            if (commissionFilter === 'paid') {
                filtered = filtered.filter(caseItem => caseItem.commissionPaid);
            } else if (commissionFilter === 'pending') {
                filtered = filtered.filter(caseItem => !caseItem.commissionPaid);
            }
        }

        // Date range filter
        if (dateRange.start && dateRange.end) {
            filtered = filtered.filter(caseItem => {
                const approvedDate = new Date(caseItem.approvedDate);
                const startDate = new Date(dateRange.start);
                const endDate = new Date(dateRange.end);
                return approvedDate >= startDate && approvedDate <= endDate;
            });
        }

        // Timeframe filter
        if (selectedTimeframe !== 'all') {
            const now = new Date();
            let startDate = new Date();
            
            switch (selectedTimeframe) {
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
                const approvedDate = new Date(caseItem.approvedDate);
                return approvedDate >= startDate;
            });
        }

        // Sort cases
        switch (sortBy) {
            case 'recent':
                filtered.sort((a, b) => new Date(b.approvedDate).getTime() - new Date(a.approvedDate).getTime());
                break;
            case 'oldest':
                filtered.sort((a, b) => new Date(a.approvedDate).getTime() - new Date(b.approvedDate).getTime());
                break;
            case 'high_value':
                filtered.sort((a, b) => b.dealValue - a.dealValue);
                break;
            case 'high_commission':
                filtered.sort((a, b) => b.commissionAmount - a.commissionAmount);
                break;
            case 'fastest':
                filtered.sort((a, b) => a.processingDays - b.processingDays);
                break;
        }

        setFilteredCases(filtered);
    }, [searchTerm, serviceTypeFilter, commissionFilter, dateRange, sortBy, selectedTimeframe, cases]);

    // Calculate statistics
    const totalApproved = cases.length;
    const totalCommission = cases.reduce((sum, caseItem) => sum + caseItem.commissionAmount, 0);
    const paidCommission = cases.filter(c => c.commissionPaid).reduce((sum, caseItem) => sum + caseItem.commissionAmount, 0);
    const pendingCommission = cases.filter(c => !c.commissionPaid).reduce((sum, caseItem) => sum + caseItem.commissionAmount, 0);
    const averageProcessingDays = cases.reduce((sum, caseItem) => sum + caseItem.processingDays, 0) / cases.length;
    const averageSatisfaction = cases.reduce((sum, caseItem) => sum + caseItem.clientSatisfaction, 0) / cases.length;

    // Get commission badge
    const getCommissionBadge = (isPaid: boolean) => {
        if (isPaid) {
            return { 
                bg: 'bg-success-light dark:bg-success-dark-light', 
                text: 'text-success', 
                label: 'Paid',
                icon: <IconCheckCircle className="w-3 h-3" />
            };
        } else {
            return { 
                bg: 'bg-warning-light dark:bg-warning-dark-light', 
                text: 'text-warning', 
                label: 'Pending',
                icon: <IconClock className="w-3 h-3" />
            };
        }
    };

    // Get service type badge
    const getServiceTypeBadge = (serviceType: string) => {
        const colors: Record<string, string> = {
            'Business Account Opening': 'primary',
            'Trade Facilities (LC)': 'info',
            'Trade Facilities (BG)': 'info',
            'Sukuk Funding': 'success',
            'Project Funding': 'warning',
            'Other Custom Services': 'secondary'
        };
        
        const color = colors[serviceType] || 'secondary';
        return { 
            bg: `bg-${color}-light dark:bg-${color}-dark-light`, 
            text: `text-${color}`, 
            label: serviceType
        };
    };

    // Get satisfaction stars
    const getSatisfactionStars = (rating: number) => {
        return (
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <IconStar 
                        key={star} 
                        className={`w-3 h-3 ${star <= rating ? 'text-warning fill-warning' : 'text-gray-300 dark:text-gray-600'}`}
                    />
                ))}
            </div>
        );
    };

    // Export to CSV
    const exportToCSV = () => {
        const headers = ['Case ID', 'Client Name', 'Service Type', 'Approved Date', 'Deal Value', 'Commission', 'Commission Status', 'Processing Days', 'Client Satisfaction'];
        const csvData = filteredCases.map(caseItem => [
            caseItem.id,
            caseItem.clientName,
            caseItem.serviceType,
            caseItem.approvedDate,
            `$${caseItem.dealValue.toLocaleString()}`,
            `$${caseItem.commissionAmount.toLocaleString()}`,
            caseItem.commissionPaid ? 'Paid' : 'Pending',
            caseItem.processingDays,
            `${caseItem.clientSatisfaction}/5`
        ]);

        const csvContent = [
            headers.join(','),
            ...csvData.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `approved_cases_export_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    // Get unique service types
    const serviceTypes = Array.from(new Set(cases.map(caseItem => caseItem.serviceType)));

    // Prepare data for charts
    const monthlyData = [
        { month: 'Oct 2023', count: 3, commission: 12000 },
        { month: 'Nov 2023', count: 5, commission: 25000 },
        { month: 'Dec 2023', count: 7, commission: 45000 },
        { month: 'Jan 2024', count: cases.length, commission: totalCommission }
    ];

    const serviceTypeDistribution = serviceTypes.map(type => ({
        type,
        count: cases.filter(c => c.serviceType === type).length,
        commission: cases.filter(c => c.serviceType === type).reduce((sum, c) => sum + c.commissionAmount, 0)
    }));

    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-xl font-bold">Approved Cases</h2>
                    <p className="text-gray-500">Successfully completed referrals and earned commissions</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <Link to="/cases/new" className="btn btn-primary gap-2">
                        <IconPlus />
                        New Referral
                    </Link>
                    <button onClick={exportToCSV} className="btn btn-success gap-2">
                        <IconDownload />
                        Export Report
                    </button>
                    <button className="btn btn-outline-primary gap-2">
                        <IconPrinter />
                        Print
                    </button>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Approved Cases</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{totalApproved}</div>
                                <span className="text-success text-sm font-medium ml-2">+15% this month</span>
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
                            <h5 className="font-semibold text-lg">Total Commission</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">${totalCommission.toLocaleString()}</div>
                                <span className="text-success text-sm font-medium ml-2">+22% growth</span>
                            </div>
                        </div>
                        <div className="bg-primary/10 p-3 rounded-full">
                            <IconDollarSign className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Avg Processing</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{averageProcessingDays.toFixed(1)} days</div>
                                <span className="text-success text-sm font-medium ml-2">Efficient</span>
                            </div>
                        </div>
                        <div className="bg-info/10 p-3 rounded-full">
                            <IconActivity className="w-8 h-8 text-info" />
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Client Satisfaction</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{averageSatisfaction.toFixed(1)}/5</div>
                                <span className="text-success text-sm font-medium ml-2">Excellent</span>
                            </div>
                        </div>
                        <div className="bg-warning/10 p-3 rounded-full">
                            <IconStar className="w-8 h-8 text-warning" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeframe Selector */}
            <div className="panel mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="font-semibold text-lg">Performance Overview</h5>
                    <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                        <button
                            onClick={() => setSelectedTimeframe('month')}
                            className={`px-4 py-1 rounded ${selectedTimeframe === 'month' ? 'bg-white dark:bg-gray-900 shadow' : 'text-gray-500'}`}
                        >
                            This Month
                        </button>
                        <button
                            onClick={() => setSelectedTimeframe('quarter')}
                            className={`px-4 py-1 rounded ${selectedTimeframe === 'quarter' ? 'bg-white dark:bg-gray-900 shadow' : 'text-gray-500'}`}
                        >
                            This Quarter
                        </button>
                        <button
                            onClick={() => setSelectedTimeframe('year')}
                            className={`px-4 py-1 rounded ${selectedTimeframe === 'year' ? 'bg-white dark:bg-gray-900 shadow' : 'text-gray-500'}`}
                        >
                            This Year
                        </button>
                        <button
                            onClick={() => setSelectedTimeframe('all')}
                            className={`px-4 py-1 rounded ${selectedTimeframe === 'all' ? 'bg-white dark:bg-gray-900 shadow' : 'text-gray-500'}`}
                        >
                            All Time
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-success-light dark:bg-success-dark-light/20 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <h6 className="font-medium text-success">Paid Commission</h6>
                                <div className="text-2xl font-bold mt-2">${paidCommission.toLocaleString()}</div>
                            </div>
                            <IconCheckCircle className="w-8 h-8 text-success" />
                        </div>
                    </div>
                    
                    <div className="bg-warning-light dark:bg-warning-dark-light/20 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <h6 className="font-medium text-warning">Pending Payment</h6>
                                <div className="text-2xl font-bold mt-2">${pendingCommission.toLocaleString()}</div>
                            </div>
                            <IconClock className="w-8 h-8 text-warning" />
                        </div>
                    </div>
                    
                    <div className="bg-primary-light dark:bg-primary-dark-light/20 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <h6 className="font-medium text-primary">Conversion Rate</h6>
                                <div className="text-2xl font-bold mt-2">78.5%</div>
                            </div>
                            <IconTrendingUp className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="panel">
                    <h5 className="font-semibold text-lg mb-5">Monthly Performance</h5>
                    <div className="h-80">
                        <ReactApexChart
                            series={[
                                {
                                    name: 'Number of Cases',
                                    type: 'column',
                                    data: monthlyData.map(m => m.count)
                                },
                                {
                                    name: 'Commission Earned',
                                    type: 'line',
                                    data: monthlyData.map(m => m.commission / 1000) // Convert to thousands for scale
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
                                    categories: monthlyData.map(m => m.month)
                                },
                                yaxis: [
                                    {
                                        title: {
                                            text: 'Number of Cases'
                                        }
                                    },
                                    {
                                        opposite: true,
                                        title: {
                                            text: 'Commission (in $000)'
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

                <div className="panel">
                    <h5 className="font-semibold text-lg mb-5">Commission by Service Type</h5>
                    <div className="h-80">
                        <ReactApexChart
                            series={serviceTypeDistribution.map(st => st.commission)}
                            options={{
                                chart: {
                                    type: 'polarArea',
                                    height: 350
                                },
                                labels: serviceTypeDistribution.map(st => st.type),
                                colors: ['#4361ee', '#00ab55', '#e2a03f', '#805dca', '#e7515a', '#3b3f5c'],
                                stroke: {
                                    colors: ['#fff']
                                },
                                fill: {
                                    opacity: 0.8
                                },
                                legend: {
                                    position: 'bottom'
                                },
                                yaxis: {
                                    show: false
                                },
                                plotOptions: {
                                    polarArea: {
                                        rings: {
                                            strokeWidth: 0
                                        },
                                        spokes: {
                                            strokeWidth: 0
                                        }
                                    }
                                },
                                theme: {
                                    monochrome: {
                                        enabled: false
                                    }
                                }
                            }}
                            type="polarArea"
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
                                placeholder="Search approved cases..."
                                className="form-input pl-10 w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3">
                        <select
                            className="form-select w-48"
                            value={serviceTypeFilter}
                            onChange={(e) => setServiceTypeFilter(e.target.value)}
                        >
                            <option value="all">All Service Types</option>
                            {serviceTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>

                        <select
                            className="form-select w-40"
                            value={commissionFilter}
                            onChange={(e) => setCommissionFilter(e.target.value)}
                        >
                            <option value="all">All Commission Status</option>
                            <option value="paid">Commission Paid</option>
                            <option value="pending">Commission Pending</option>
                        </select>

                        <select
                            className="form-select w-40"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="recent">Recently Approved</option>
                            <option value="oldest">Oldest First</option>
                            <option value="high_value">Highest Value</option>
                            <option value="high_commission">Highest Commission</option>
                            <option value="fastest">Fastest Processing</option>
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
                                setServiceTypeFilter('all');
                                setCommissionFilter('all');
                                setDateRange({ start: '', end: '' });
                                setSortBy('recent');
                            }}
                            className="btn btn-outline-primary gap-2"
                        >
                            <IconRefresh className="w-4 h-4" />
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {/* Approved Cases Table */}
            <div className="panel">
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg">Approved Cases ({filteredCases.length})</h5>
                    <div className="text-sm text-gray-500">
                        Total Commission: ${totalCommission.toLocaleString()}
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
                                    <th>Approval Date</th>
                                    <th>Processing Days</th>
                                    <th>Satisfaction</th>
                                    <th>Deal Value</th>
                                    <th>Commission</th>
                                    <th>Payment Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCases.length === 0 ? (
                                    <tr>
                                        <td colSpan={10} className="text-center py-8 text-gray-500">
                                            No approved cases found matching your filters
                                        </td>
                                    </tr>
                                ) : (
                                    filteredCases.map((caseItem, index) => {
                                        const commissionBadge = getCommissionBadge(caseItem.commissionPaid);
                                        const serviceTypeBadge = getServiceTypeBadge(caseItem.serviceType);
                                        const processingClass = caseItem.processingDays <= 10 ? 'text-success' : 
                                                              caseItem.processingDays <= 20 ? 'text-warning' : 'text-danger';
                                        
                                        return (
                                            <tr key={index} className="group hover:bg-gray-50 dark:hover:bg-gray-800/50">
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
                                                    <div className={`inline-flex items-center px-3 py-1 rounded-full ${serviceTypeBadge.bg} ${serviceTypeBadge.text}`}>
                                                        <span className="text-xs font-medium">{serviceTypeBadge.label}</span>
                                                    </div>
                                                    <div className="text-xs text-gray-500 mt-1">
                                                        <IconFileText className="w-3 h-3 inline mr-1" />
                                                        {caseItem.documents} docs
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>{caseItem.approvedDate}</div>
                                                    <div className="text-xs text-gray-500">
                                                        Completed: {caseItem.completionDate}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={`font-medium ${processingClass}`}>
                                                        {caseItem.processingDays} days
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        {caseItem.assignedTo}
                                                    </div>
                                                </td>
                                                <td>
                                                    {getSatisfactionStars(caseItem.clientSatisfaction)}
                                                    <div className="text-xs text-gray-500 mt-1">
                                                        {caseItem.clientSatisfaction}/5
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="font-semibold">${caseItem.dealValue.toLocaleString()}</div>
                                                </td>
                                                <td>
                                                    <div className="font-bold text-success">
                                                        ${caseItem.commissionAmount.toLocaleString()}
                                                    </div>
                                                    {caseItem.commissionPaid ? (
                                                        <div className="text-xs text-gray-500">
                                                            Paid on: {caseItem.commissionPaidDate}
                                                        </div>
                                                    ) : (
                                                        <div className="text-xs text-warning">
                                                            Payment pending
                                                        </div>
                                                    )}
                                                </td>
                                                <td>
                                                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${commissionBadge.bg} ${commissionBadge.text}`}>
                                                        {commissionBadge.icon}
                                                        <span className="text-xs font-medium">{commissionBadge.label}</span>
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
                                                            className="btn btn-outline-success btn-sm p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                                            title="Share"
                                                        >
                                                            <IconShare className="w-4 h-4" />
                                                        </button>
                                                        {caseItem.tags.length > 0 && (
                                                            <Dropdown
                                                                placement="bottom-end"
                                                                btnClassName="btn btn-outline-secondary btn-sm p-1.5"
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
            </div>

            {/* Summary Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="panel">
                    <h5 className="font-semibold text-lg mb-4">Top Performing Cases</h5>
                    <div className="space-y-3">
                        {cases
                            .sort((a, b) => b.commissionAmount - a.commissionAmount)
                            .slice(0, 3)
                            .map((caseItem) => (
                                <div key={caseItem.id} className="flex items-center justify-between p-3 bg-primary-light dark:bg-primary-dark-light/20 rounded-lg">
                                    <div>
                                        <div className="font-medium">{caseItem.id}</div>
                                        <div className="text-sm text-gray-500">
                                            ${caseItem.commissionAmount.toLocaleString()} commission
                                        </div>
                                    </div>
                                    <div className="text-primary font-bold">
                                        <IconStar className="w-4 h-4 fill-primary" />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="panel">
                    <h5 className="font-semibold text-lg mb-4">Quickest Processing</h5>
                    <div className="space-y-3">
                        {cases
                            .sort((a, b) => a.processingDays - b.processingDays)
                            .slice(0, 3)
                            .map((caseItem) => (
                                <div key={caseItem.id} className="flex items-center justify-between p-3 bg-success-light dark:bg-success-dark-light/20 rounded-lg">
                                    <div>
                                        <div className="font-medium">{caseItem.id}</div>
                                        <div className="text-sm text-gray-500">
                                            {caseItem.processingDays} days
                                        </div>
                                    </div>
                                    <div className="text-success font-bold">
                                        🚀
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="panel">
                    <h5 className="font-semibold text-lg mb-4">Pending Payments</h5>
                    <div className="space-y-3">
                        {cases
                            .filter(c => !c.commissionPaid)
                            .map((caseItem) => (
                                <div key={caseItem.id} className="flex items-center justify-between p-3 bg-warning-light dark:bg-warning-dark-light/20 rounded-lg">
                                    <div>
                                        <div className="font-medium">{caseItem.id}</div>
                                        <div className="text-sm text-gray-500">
                                            ${caseItem.commissionAmount.toLocaleString()} pending
                                        </div>
                                    </div>
                                    <div className="text-warning">
                                        <IconClock className="w-4 h-4" />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovedCases;