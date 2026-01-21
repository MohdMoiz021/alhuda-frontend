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

const AllCases = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('All Cases - Partner Dashboard'));
    });

    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    // Mock data for cases
    const [cases, setCases] = useState([
        {
            id: 'ALH-2024-00123',
            clientName: 'Mohammed Al-Sayed',
            company: 'Sayed Trading Co.',
            serviceType: 'Business Account Opening',
            status: 'approved',
            statusLabel: 'Approved',
            priority: 'high',
            createdAt: '2024-01-20',
            lastUpdated: '2024-01-22',
            dealValue: 15000,
            commission: 2250,
            documents: 5,
            assignedTo: 'Sarah Johnson'
        },
        {
            id: 'ALH-2024-00124',
            clientName: 'Ahmed Hassan',
            company: 'Hassan Constructions',
            serviceType: 'Project Funding',
            status: 'in_review',
            statusLabel: 'Under Review',
            priority: 'medium',
            createdAt: '2024-01-21',
            lastUpdated: '2024-01-21',
            dealValue: 500000,
            commission: 25000,
            documents: 8,
            assignedTo: 'Michael Chen'
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
            dealValue: 75000,
            commission: 3750,
            documents: 3,
            assignedTo: 'Robert Williams'
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
            dealValue: 250000,
            commission: 12500,
            documents: 6,
            assignedTo: 'Not Assigned'
        },
        {
            id: 'ALH-2024-00127',
            clientName: 'Layla Abdullah',
            company: 'Abdullah & Sons',
            serviceType: 'Business Account Opening',
            status: 'in_process',
            statusLabel: 'In Process',
            priority: 'low',
            createdAt: '2024-01-15',
            lastUpdated: '2024-01-21',
            dealValue: 10000,
            commission: 1500,
            documents: 4,
            assignedTo: 'Sarah Johnson'
        },
        {
            id: 'ALH-2024-00128',
            clientName: 'Omar Farooq',
            company: 'Farooq Logistics',
            serviceType: 'Trade Facilities (BG)',
            status: 'closed',
            statusLabel: 'Closed',
            priority: 'low',
            createdAt: '2024-01-10',
            lastUpdated: '2024-01-18',
            dealValue: 50000,
            commission: 2500,
            documents: 7,
            assignedTo: 'Michael Chen'
        },
        {
            id: 'ALH-2024-00129',
            clientName: 'Noura Al-Zahrani',
            company: 'Zahrani Group',
            serviceType: 'Project Funding',
            status: 'rejected',
            statusLabel: 'Rejected',
            priority: 'medium',
            createdAt: '2024-01-18',
            lastUpdated: '2024-01-20',
            dealValue: 300000,
            commission: 0,
            documents: 5,
            assignedTo: 'Robert Williams'
        },
        {
            id: 'ALH-2024-00130',
            clientName: 'Salem Al-Ghamdi',
            company: 'Ghamdi Industries',
            serviceType: 'Other Custom Services',
            status: 'approved',
            statusLabel: 'Approved',
            priority: 'high',
            createdAt: '2024-01-17',
            lastUpdated: '2024-01-22',
            dealValue: 80000,
            commission: 4000,
            documents: 6,
            assignedTo: 'Sarah Johnson'
        }
    ]);

    const [filteredCases, setFilteredCases] = useState(cases);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [serviceTypeFilter, setServiceTypeFilter] = useState('all');
    const [priorityFilter, setPriorityFilter] = useState('all');
    const [dateRange, setDateRange] = useState({ start: '', end: '' });

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

        // Service type filter
        if (serviceTypeFilter !== 'all') {
            filtered = filtered.filter(caseItem => caseItem.serviceType === serviceTypeFilter);
        }

        // Priority filter
        if (priorityFilter !== 'all') {
            filtered = filtered.filter(caseItem => caseItem.priority === priorityFilter);
        }

        // Date range filter
        if (dateRange.start && dateRange.end) {
            filtered = filtered.filter(caseItem => {
                const caseDate = new Date(caseItem.createdAt);
                const startDate = new Date(dateRange.start);
                const endDate = new Date(dateRange.end);
                return caseDate >= startDate && caseDate <= endDate;
            });
        }

        setFilteredCases(filtered);
    }, [searchTerm, statusFilter, serviceTypeFilter, priorityFilter, dateRange, cases]);

    // Get status badge color
    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'approved':
                return { bg: 'bg-success', text: 'text-success', icon: <IconCheckCircle className="w-4 h-4" /> };
            case 'in_review':
                return { bg: 'bg-info', text: 'text-info', icon: <IconClockFilled className="w-4 h-4" /> };
            case 'clarification':
                return { bg: 'bg-warning', text: 'text-warning', icon: <IconAlertCircle className="w-4 h-4" /> };
            case 'pending':
                return { bg: 'bg-secondary', text: 'text-secondary', icon: <IconClock className="w-4 h-4" /> };
            case 'in_process':
                return { bg: 'bg-primary', text: 'text-primary', icon: <IconRefresh className="w-4 h-4" /> };
            case 'closed':
                return { bg: 'bg-dark', text: 'text-dark', icon: <IconSquareCheck className="w-4 h-4" /> };
            case 'rejected':
                return { bg: 'bg-danger', text: 'text-danger', icon: <IconXCircle className="w-4 h-4" /> };
            default:
                return { bg: 'bg-secondary', text: 'text-secondary', icon: <IconClock className="w-4 h-4" /> };
        }
    };

    // Get priority badge color
    const getPriorityBadge = (priority: string) => {
        switch (priority) {
            case 'high':
                return { bg: 'bg-danger-light', text: 'text-danger', label: 'High' };
            case 'medium':
                return { bg: 'bg-warning-light', text: 'text-warning', label: 'Medium' };
            case 'low':
                return { bg: 'bg-success-light', text: 'text-success', label: 'Low' };
            default:
                return { bg: 'bg-secondary-light', text: 'text-secondary', label: 'Standard' };
        }
    };

    // Export cases to CSV
    const exportToCSV = () => {
        const headers = ['Case ID', 'Client Name', 'Company', 'Service Type', 'Status', 'Priority', 'Created Date', 'Deal Value', 'Commission'];
        const csvData = filteredCases.map(caseItem => [
            caseItem.id,
            caseItem.clientName,
            caseItem.company,
            caseItem.serviceType,
            caseItem.statusLabel,
            caseItem.priority.charAt(0).toUpperCase() + caseItem.priority.slice(1),
            caseItem.createdAt,
            `$${caseItem.dealValue.toLocaleString()}`,
            `$${caseItem.commission.toLocaleString()}`
        ]);

        const csvContent = [
            headers.join(','),
            ...csvData.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cases_export_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    // Get unique service types for filter
    const serviceTypes = Array.from(new Set(cases.map(caseItem => caseItem.serviceType)));

    // Statistics
    const totalCases = cases.length;
    const totalCommission = cases.reduce((sum, caseItem) => sum + caseItem.commission, 0);
    const pendingCases = cases.filter(caseItem => caseItem.status === 'pending').length;
    const clarificationCases = cases.filter(caseItem => caseItem.status === 'clarification').length;

    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-xl font-bold">All Cases</h2>
                    <p className="text-gray-500">Manage and track all your referrals</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <Link to="/cases/new" className="btn btn-primary gap-2">
                        <IconPlus />
                        New Referral
                    </Link>
                    <button onClick={exportToCSV} className="btn btn-success gap-2">
                        <IconDownload />
                        Export
                    </button>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Total Cases</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{totalCases}</div>
                                <span className="text-success text-sm font-medium ml-2">+12%</span>
                            </div>
                        </div>
                        <div className="bg-primary/10 p-3 rounded-full">
                            <IconFolder className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Total Commission</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">${totalCommission.toLocaleString()}</div>
                                <span className="text-success text-sm font-medium ml-2">+8%</span>
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
                            <h5 className="font-semibold text-lg">Pending Review</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{pendingCases}</div>
                                <span className="text-warning text-sm font-medium ml-2">Needs attention</span>
                            </div>
                        </div>
                        <div className="bg-warning/10 p-3 rounded-full">
                            <IconClock className="w-8 h-8 text-warning" />
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Clarification Needed</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{clarificationCases}</div>
                                <span className="text-danger text-sm font-medium ml-2">Action required</span>
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
                                placeholder="Search cases..."
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
                            <option value="approved">Approved</option>
                            <option value="in_process">In Process</option>
                            <option value="closed">Closed</option>
                            <option value="rejected">Rejected</option>
                        </select>

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
                            className="form-select w-32"
                            value={priorityFilter}
                            onChange={(e) => setPriorityFilter(e.target.value)}
                        >
                            <option value="all">All Priority</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>

                        <div className="flex items-center gap-2">
                            <input
                                type="date"
                                className="form-input"
                                value={dateRange.start}
                                onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                                placeholder="Start Date"
                            />
                            <span>to</span>
                            <input
                                type="date"
                                className="form-input"
                                value={dateRange.end}
                                onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                                placeholder="End Date"
                            />
                        </div>

                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setStatusFilter('all');
                                setServiceTypeFilter('all');
                                setPriorityFilter('all');
                                setDateRange({ start: '', end: '' });
                            }}
                            className="btn btn-outline-primary gap-2"
                        >
                            <IconRefresh className="w-4 h-4" />
                            Reset Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Cases Table */}
            <div className="panel">
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg">Cases ({filteredCases.length})</h5>
                    <div className="text-sm text-gray-500">
                        Showing {filteredCases.length} of {totalCases} cases
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
                                    <th>Status</th>
                                    <th>Priority</th>
                                    <th>Created Date</th>
                                    <th>Deal Value</th>
                                    <th>Commission</th>
                                    <th>Documents</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCases.length === 0 ? (
                                    <tr>
                                        <td colSpan={10} className="text-center py-8 text-gray-500">
                                            No cases found matching your filters
                                        </td>
                                    </tr>
                                ) : (
                                    filteredCases.map((caseItem, index) => {
                                        const statusBadge = getStatusBadge(caseItem.status);
                                        const priorityBadge = getPriorityBadge(caseItem.priority);
                                        
                                        return (
                                            <tr key={index} className="group">
                                                <td className="!px-3">
                                                    <div className="font-semibold text-primary hover:underline cursor-pointer">
                                                        {caseItem.id}
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
                                                </td>
                                                <td>
                                                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${statusBadge.bg} ${statusBadge.text}`}>
                                                        {statusBadge.icon}
                                                        <span className="text-xs font-medium">{caseItem.statusLabel}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${priorityBadge.bg} ${priorityBadge.text}`}>
                                                        {priorityBadge.label}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>{caseItem.createdAt}</div>
                                                    <div className="text-xs text-gray-500">Updated: {caseItem.lastUpdated}</div>
                                                </td>
                                                <td>
                                                    <div className="font-semibold">${caseItem.dealValue.toLocaleString()}</div>
                                                </td>
                                                <td>
                                                    <div className={`font-semibold ${caseItem.commission > 0 ? 'text-success' : 'text-gray-500'}`}>
                                                        ${caseItem.commission.toLocaleString()}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-1">
                                                        <IconFileText className="w-4 h-4 text-primary" />
                                                        <span>{caseItem.documents}</span>
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
                                                        {(caseItem.status === 'clarification' || caseItem.status === 'pending') && (
                                                            <Link
                                                                to={`/cases/${caseItem.id}/edit`}
                                                                className="btn btn-outline-warning btn-sm p-1.5"
                                                                title="Update/Respond"
                                                            >
                                                                <IconEdit className="w-4 h-4" />
                                                            </Link>
                                                        )}
                                                        <button
                                                            className="btn btn-outline-danger btn-sm p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                                            title="Delete"
                                                            onClick={() => {
                                                                // Add delete confirmation
                                                                if (confirm(`Are you sure you want to delete case ${caseItem.id}?`)) {
                                                                    setCases(cases.filter(c => c.id !== caseItem.id));
                                                                }
                                                            }}
                                                        >
                                                            <IconTrashLines className="w-4 h-4" />
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

            {/* Quick Stats Chart */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="panel">
                    <h5 className="font-semibold text-lg mb-5">Cases by Status</h5>
                    <div className="h-80">
                        <ReactApexChart
                            series={[{
                                name: 'Cases',
                                data: [
                                    cases.filter(c => c.status === 'approved').length,
                                    cases.filter(c => c.status === 'in_review').length,
                                    cases.filter(c => c.status === 'clarification').length,
                                    cases.filter(c => c.status === 'pending').length,
                                    cases.filter(c => c.status === 'in_process').length,
                                    cases.filter(c => c.status === 'closed').length,
                                    cases.filter(c => c.status === 'rejected').length
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
                                        borderRadius: 4,
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
                                colors: ['#4361ee', '#1abc9c', '#e7515a', '#e2a03f', '#805dca', '#3b3f5c', '#888ea8'],
                                xaxis: {
                                    categories: ['Approved', 'Under Review', 'Clarification', 'Pending', 'In Process', 'Closed', 'Rejected']
                                },
                                yaxis: { title: { text: 'Number of Cases' } },
                                fill: { opacity: 1 }
                            }}
                            type="bar"
                            height={350}
                        />
                    </div>
                </div>

                <div className="panel">
                    <h5 className="font-semibold text-lg mb-5">Commission Distribution</h5>
                    <div className="h-80">
                        <ReactApexChart
                            series={serviceTypes.map(type => 
                                cases.filter(c => c.serviceType === type)
                                    .reduce((sum, c) => sum + c.commission, 0)
                            )}
                            options={{
                                chart: {
                                    type: 'donut',
                                    height: 350
                                },
                                labels: serviceTypes,
                                colors: ['#4361ee', '#1abc9c', '#e7515a', '#e2a03f', '#805dca', '#3b3f5c'],
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
                                                    label: 'Total Commission',
                                                    formatter: () => `$${totalCommission.toLocaleString()}`
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
            </div>
        </div>
    );
};

export default AllCases;