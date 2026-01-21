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
import IconMessageCircle from '../../../components/Icon/IconMessageCircle';
import IconUpload from '../../../components/Icon/IconUpload';
import IconCheckCircle from '../../../components/Icon/IconCheckCircle';
import IconXCircle from '../../../components/Icon/IconXCircle';
import IconSend from '../../../components/Icon/IconSend';
import IconPaperclip from '../../../components/Icon/IconPaperclip';

const NeedsClarification = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Clarification Needed - Partner Dashboard'));
    });

    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    // Mock data for cases needing clarification
    const [cases, setCases] = useState([
        {
            id: 'ALH-2024-00141',
            clientName: 'Ahmed Al-Masri',
            company: 'Masri Trading Co.',
            serviceType: 'Business Account Opening',
            status: 'clarification',
            statusLabel: 'Clarification Needed',
            priority: 'high',
            createdAt: '2024-01-20',
            clarificationDate: '2024-01-22',
            clarificationType: 'document_missing',
            clarificationTitle: 'Missing Business License',
            clarificationDetails: 'Please upload a copy of the renewed business license. The current one has expired.',
            requestedBy: 'Sarah Johnson',
            requestedAt: 'Today, 11:30 AM',
            responseDue: '2024-01-24',
            hoursRemaining: 24,
            dealValue: 15000,
            commission: 2250,
            documents: 4,
            canRespond: true,
            attachmentsRequired: true
        },
        {
            id: 'ALH-2024-00142',
            clientName: 'Fatima Al-Khalifa',
            company: 'Khalifa Investments',
            serviceType: 'Project Funding',
            status: 'clarification',
            statusLabel: 'Clarification Needed',
            priority: 'high',
            createdAt: '2024-01-19',
            clarificationDate: '2024-01-21',
            clarificationType: 'information_missing',
            clarificationTitle: 'Project Financials Details',
            clarificationDetails: 'Need detailed breakdown of project costs and revenue projections for years 1-3.',
            requestedBy: 'Michael Chen',
            requestedAt: 'Yesterday, 2:15 PM',
            responseDue: '2024-01-23',
            hoursRemaining: 12,
            dealValue: 500000,
            commission: 25000,
            documents: 8,
            canRespond: true,
            attachmentsRequired: true
        },
        {
            id: 'ALH-2024-00143',
            clientName: 'Khalid Al-Harbi',
            company: 'Harbi Construction',
            serviceType: 'Trade Facilities (BG)',
            status: 'clarification',
            statusLabel: 'Clarification Needed',
            priority: 'medium',
            createdAt: '2024-01-18',
            clarificationDate: '2024-01-20',
            clarificationType: 'verification_needed',
            clarificationTitle: 'Client Identity Verification',
            clarificationDetails: 'Please provide additional identification documents for Mr. Khalid Al-Harbi.',
            requestedBy: 'Robert Williams',
            requestedAt: '2 days ago',
            responseDue: '2024-01-22',
            hoursRemaining: -4,
            dealValue: 120000,
            commission: 6000,
            documents: 5,
            canRespond: true,
            attachmentsRequired: true
        },
        {
            id: 'ALH-2024-00144',
            clientName: 'Layla Al-Qasimi',
            company: 'Qasimi Retail',
            serviceType: 'Sukuk Funding',
            status: 'clarification',
            statusLabel: 'Clarification Needed',
            priority: 'medium',
            createdAt: '2024-01-17',
            clarificationDate: '2024-01-19',
            clarificationType: 'details_clarification',
            clarificationTitle: 'Investment Purpose Clarification',
            clarificationDetails: 'Need more details about how the Sukuk funds will be utilized specifically.',
            requestedBy: 'Sarah Johnson',
            requestedAt: '3 days ago',
            responseDue: '2024-01-21',
            hoursRemaining: -12,
            dealValue: 300000,
            commission: 15000,
            documents: 7,
            canRespond: true,
            attachmentsRequired: false
        },
        {
            id: 'ALH-2024-00145',
            clientName: 'Omar Al-Farsi',
            company: 'Farsi Logistics',
            serviceType: 'Business Account Opening',
            status: 'clarification',
            statusLabel: 'Clarification Needed',
            priority: 'low',
            createdAt: '2024-01-16',
            clarificationDate: '2024-01-18',
            clarificationType: 'document_quality',
            clarificationTitle: 'Document Legibility Issue',
            clarificationDetails: 'Some uploaded documents are blurry. Please upload clear, readable copies.',
            requestedBy: 'Michael Chen',
            requestedAt: '4 days ago',
            responseDue: '2024-01-20',
            hoursRemaining: -24,
            dealValue: 25000,
            commission: 3750,
            documents: 3,
            canRespond: true,
            attachmentsRequired: true
        },
        {
            id: 'ALH-2024-00146',
            clientName: 'Noura Al-Shehhi',
            company: 'Shehhi Holdings',
            serviceType: 'Project Funding',
            status: 'clarification',
            statusLabel: 'Awaiting Internal Review',
            priority: 'high',
            createdAt: '2024-01-15',
            clarificationDate: '2024-01-17',
            clarificationType: 'responded',
            clarificationTitle: 'Response Submitted',
            clarificationDetails: 'You have responded. Awaiting internal team review of your submission.',
            requestedBy: 'Robert Williams',
            requestedAt: '5 days ago',
            responseSubmitted: '2024-01-19',
            responseDue: '2024-01-19',
            hoursRemaining: 0,
            dealValue: 750000,
            commission: 37500,
            documents: 10,
            canRespond: false,
            attachmentsRequired: false,
            responseStatus: 'under_review'
        }
    ]);

    const [filteredCases, setFilteredCases] = useState(cases);
    const [searchTerm, setSearchTerm] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');
    const [selectedCase, setSelectedCase] = useState<any>(null);
    const [responseText, setResponseText] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

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
                caseItem.clarificationTitle.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Priority filter
        if (priorityFilter !== 'all') {
            filtered = filtered.filter(caseItem => caseItem.priority === priorityFilter);
        }

        // Status filter
        if (statusFilter !== 'all') {
            if (statusFilter === 'pending_response') {
                filtered = filtered.filter(caseItem => caseItem.canRespond);
            } else if (statusFilter === 'responded') {
                filtered = filtered.filter(caseItem => !caseItem.canRespond);
            } else if (statusFilter === 'overdue') {
                filtered = filtered.filter(caseItem => caseItem.hoursRemaining < 0 && caseItem.canRespond);
            }
        }

        setFilteredCases(filtered);
    }, [searchTerm, priorityFilter, statusFilter, cases]);

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

    // Get clarification type badge
    const getClarificationTypeBadge = (type: string) => {
        switch (type) {
            case 'document_missing':
                return { bg: 'bg-primary-light dark:bg-primary-dark-light', text: 'text-primary', label: 'Missing Document' };
            case 'information_missing':
                return { bg: 'bg-info-light dark:bg-info-dark-light', text: 'text-info', label: 'Information Needed' };
            case 'verification_needed':
                return { bg: 'bg-warning-light dark:bg-warning-dark-light', text: 'text-warning', label: 'Verification' };
            case 'details_clarification':
                return { bg: 'bg-secondary-light dark:bg-secondary-dark-light', text: 'text-secondary', label: 'Details Clarification' };
            case 'document_quality':
                return { bg: 'bg-danger-light dark:bg-danger-dark-light', text: 'text-danger', label: 'Document Quality' };
            case 'responded':
                return { bg: 'bg-success-light dark:bg-success-dark-light', text: 'text-success', label: 'Response Submitted' };
            default:
                return { bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-600 dark:text-gray-400', label: 'Clarification' };
        }
    };

    // Get time remaining badge
    const getTimeRemainingBadge = (hoursRemaining: number) => {
        if (hoursRemaining > 24) {
            return { bg: 'bg-success-light dark:bg-success-dark-light', text: 'text-success', label: `${Math.floor(hoursRemaining/24)} days left` };
        } else if (hoursRemaining > 0) {
            return { bg: 'bg-warning-light dark:bg-warning-dark-light', text: 'text-warning', label: `${hoursRemaining} hours left` };
        } else if (hoursRemaining === 0) {
            return { bg: 'bg-danger-light dark:bg-danger-dark-light', text: 'text-danger', label: 'Due today' };
        } else {
            return { bg: 'bg-danger-light dark:bg-danger-dark-light', text: 'text-danger', label: `${Math.abs(hoursRemaining)} hours overdue` };
        }
    };

    // Calculate statistics
    const totalClarifications = cases.length;
    const pendingResponse = cases.filter(c => c.canRespond).length;
    const overdueClarifications = cases.filter(c => c.hoursRemaining < 0 && c.canRespond).length;
    const highPriority = cases.filter(c => c.priority === 'high' && c.canRespond).length;
    const totalCommission = cases.reduce((sum, caseItem) => sum + caseItem.commission, 0);

    // Handle file upload
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            setUploadedFiles(prev => [...prev, ...files]);
        }
    };

    // Handle response submission
    const handleSubmitResponse = (caseId: string) => {
        if (!responseText.trim() && uploadedFiles.length === 0) {
            alert('Please provide a response or upload documents');
            return;
        }

        // In real app, this would call an API
        alert(`Response submitted for case ${caseId}`);
        
        // Update the case status
        setCases(cases.map(caseItem => 
            caseItem.id === caseId 
                ? { 
                    ...caseItem, 
                    canRespond: false,
                    clarificationType: 'responded',
                    clarificationTitle: 'Response Submitted',
                    clarificationDetails: 'Awaiting internal team review',
                    responseStatus: 'under_review'
                }
                : caseItem
        ));
        
        setResponseText('');
        setUploadedFiles([]);
        setSelectedCase(null);
    };

    // Group cases by status for chart
    const clarificationTypeCounts = cases.reduce((acc, caseItem) => {
        const type = caseItem.clarificationType;
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-xl font-bold">Clarification Needed</h2>
                    <p className="text-gray-500">Cases requiring your response or additional information</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
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
                            <h5 className="font-semibold text-lg">Pending Response</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{pendingResponse}</div>
                                <span className="text-warning text-sm font-medium ml-2">Needs action</span>
                            </div>
                        </div>
                        <div className="bg-warning/10 p-3 rounded-full">
                            <IconAlertCircle className="w-8 h-8 text-warning" />
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">Overdue Response</h5>
                            <div className="flex items-center mt-2">
                                <div className="text-3xl font-bold">{overdueClarifications}</div>
                                <span className="text-danger text-sm font-medium ml-2">Urgent</span>
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
                                <div className="text-3xl font-bold">{highPriority}</div>
                                <span className="text-danger text-sm font-medium ml-2">Critical</span>
                            </div>
                        </div>
                        <div className="bg-danger/10 p-3 rounded-full">
                            <IconClock className="w-8 h-8 text-danger" />
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="font-semibold text-lg">At Stake</h5>
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

            {/* Filters */}
            <div className="panel mb-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex-1">
                        <div className="relative max-w-xs">
                            <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search clarification requests..."
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
                            className="form-select w-48"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="all">All Status</option>
                            <option value="pending_response">Pending Response</option>
                            <option value="responded">Response Submitted</option>
                            <option value="overdue">Overdue Response</option>
                        </select>

                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setPriorityFilter('all');
                                setStatusFilter('all');
                            }}
                            className="btn btn-outline-primary gap-2"
                        >
                            <IconRefresh className="w-4 h-4" />
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="panel">
                    <h5 className="font-semibold text-lg mb-5">Clarification Types</h5>
                    <div className="h-80">
                        <ReactApexChart
                            series={Object.values(clarificationTypeCounts)}
                            options={{
                                chart: {
                                    type: 'pie',
                                    height: 350
                                },
                                labels: Object.keys(clarificationTypeCounts).map(key => {
                                    const labelsMap: Record<string, string> = {
                                        'document_missing': 'Missing Documents',
                                        'information_missing': 'Information Needed',
                                        'verification_needed': 'Verification',
                                        'details_clarification': 'Details Clarification',
                                        'document_quality': 'Document Quality',
                                        'responded': 'Response Submitted'
                                    };
                                    return labelsMap[key] || key;
                                }),
                                colors: ['#4361ee', '#00ab55', '#e2a03f', '#805dca', '#e7515a', '#3b3f5c'],
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
                                                    label: 'Total Requests',
                                                    formatter: () => totalClarifications.toString()
                                                }
                                            }
                                        }
                                    }
                                },
                                dataLabels: {
                                    enabled: false
                                }
                            }}
                            type="pie"
                            height={350}
                        />
                    </div>
                </div>

                <div className="panel">
                    <h5 className="font-semibold text-lg mb-5">Response Timeline</h5>
                    <div className="h-80">
                        <ReactApexChart
                            series={[{
                                name: 'Cases',
                                data: [
                                    cases.filter(c => c.hoursRemaining > 48).length,
                                    cases.filter(c => c.hoursRemaining > 24 && c.hoursRemaining <= 48).length,
                                    cases.filter(c => c.hoursRemaining > 0 && c.hoursRemaining <= 24).length,
                                    cases.filter(c => c.hoursRemaining === 0).length,
                                    cases.filter(c => c.hoursRemaining < 0).length
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
                                    categories: ['> 2 days', '1-2 days', '< 24 hours', 'Due today', 'Overdue']
                                },
                                yaxis: { 
                                    title: { text: 'Number of Cases' },
                                    min: 0,
                                    max: Math.max(...Object.values(clarificationTypeCounts)) + 2
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

            {/* Main Content - Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cases List - 2 columns */}
                <div className="lg:col-span-2">
                    <div className="panel">
                        <div className="flex items-center justify-between mb-5">
                            <h5 className="font-semibold text-lg">Clarification Requests ({filteredCases.length})</h5>
                            <div className="text-sm text-gray-500">
                                {pendingResponse} require your response
                            </div>
                        </div>

                        <PerfectScrollbar className="max-h-[600px]">
                            <div className="space-y-4">
                                {filteredCases.length === 0 ? (
                                    <div className="text-center py-8 text-gray-500">
                                        No clarification requests found matching your filters
                                    </div>
                                ) : (
                                    filteredCases.map((caseItem, index) => {
                                        const priorityBadge = getPriorityBadge(caseItem.priority);
                                        const typeBadge = getClarificationTypeBadge(caseItem.clarificationType);
                                        const timeBadge = getTimeRemainingBadge(caseItem.hoursRemaining);
                                        const isOverdue = caseItem.hoursRemaining < 0 && caseItem.canRespond;
                                        
                                        return (
                                            <div 
                                                key={index} 
                                                className={`p-4 rounded-lg border ${isOverdue ? 'border-danger' : 'border-gray-200 dark:border-gray-700'} hover:border-primary cursor-pointer transition-all ${selectedCase?.id === caseItem.id ? 'ring-2 ring-primary' : ''}`}
                                                onClick={() => setSelectedCase(caseItem)}
                                            >
                                                <div className="flex items-start justify-between mb-3">
                                                    <div>
                                                        <div className="font-semibold text-primary">{caseItem.id}</div>
                                                        <div className="text-sm text-gray-500">
                                                            {caseItem.clientName} • {caseItem.serviceType}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className={`px-2 py-1 rounded text-xs font-medium ${priorityBadge.bg} ${priorityBadge.text}`}>
                                                            {priorityBadge.label}
                                                        </div>
                                                        <div className={`px-2 py-1 rounded text-xs font-medium ${timeBadge.bg} ${timeBadge.text}`}>
                                                            {timeBadge.label}
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="mb-3">
                                                    <h4 className="font-medium text-lg mb-1">{caseItem.clarificationTitle}</h4>
                                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                        {caseItem.clarificationDetails}
                                                    </p>
                                                </div>
                                                
                                                <div className="flex items-center justify-between text-sm">
                                                    <div className="flex items-center gap-4">
                                                        <div className={`px-2 py-1 rounded text-xs font-medium ${typeBadge.bg} ${typeBadge.text}`}>
                                                            {typeBadge.label}
                                                        </div>
                                                        <div className="text-gray-500">
                                                            <IconFileText className="w-3 h-3 inline mr-1" />
                                                            {caseItem.documents} docs
                                                        </div>
                                                        <div className="text-gray-500">
                                                            Requested by: {caseItem.requestedBy}
                                                        </div>
                                                    </div>
                                                    <div className="text-gray-500 text-xs">
                                                        {caseItem.requestedAt}
                                                    </div>
                                                </div>
                                                
                                                {caseItem.canRespond && (
                                                    <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                                                        <div className="flex justify-end">
                                                            <button 
                                                                className="btn btn-warning btn-sm gap-2"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setSelectedCase(caseItem);
                                                                }}
                                                            >
                                                                <IconEdit className="w-4 h-4" />
                                                                Respond Now
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </PerfectScrollbar>
                    </div>
                </div>

                {/* Response Panel - 1 column */}
                <div className="lg:col-span-1">
                    <div className="panel sticky top-6">
                        {selectedCase ? (
                            <>
                                <div className="flex items-center justify-between mb-4">
                                    <h5 className="font-semibold text-lg">Respond to {selectedCase.id}</h5>
                                    <button 
                                        onClick={() => setSelectedCase(null)}
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        Close
                                    </button>
                                </div>
                                
                                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <h6 className="font-medium mb-2">Clarification Request</h6>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                        {selectedCase.clarificationDetails}
                                    </p>
                                    <div className="text-xs text-gray-500">
                                        Requested by: {selectedCase.requestedBy} • {selectedCase.requestedAt}
                                    </div>
                                </div>
                                
                                {selectedCase.canRespond ? (
                                    <>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium mb-2">Your Response</label>
                                            <textarea 
                                                className="form-textarea min-h-[120px]"
                                                placeholder="Type your response here..."
                                                value={responseText}
                                                onChange={(e) => setResponseText(e.target.value)}
                                            />
                                        </div>
                                        
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium mb-2">Upload Documents</label>
                                            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 text-center">
                                                <input
                                                    type="file"
                                                    multiple
                                                    className="hidden"
                                                    id="file-upload"
                                                    onChange={handleFileUpload}
                                                />
                                                <label 
                                                    htmlFor="file-upload"
                                                    className="cursor-pointer flex flex-col items-center"
                                                >
                                                    <IconUpload className="w-8 h-8 text-gray-400 mb-2" />
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                                        Click to upload or drag and drop
                                                    </span>
                                                    <span className="text-xs text-gray-500 mt-1">
                                                        PDF, JPG, PNG, DOC (Max 50MB)
                                                    </span>
                                                </label>
                                            </div>
                                            
                                            {uploadedFiles.length > 0 && (
                                                <div className="mt-3">
                                                    <h6 className="text-sm font-medium mb-2">Uploaded Files:</h6>
                                                    <div className="space-y-2">
                                                        {uploadedFiles.map((file, index) => (
                                                            <div key={index} className="flex items-center justify-between text-sm bg-gray-50 dark:bg-gray-800 p-2 rounded">
                                                                <span className="truncate">{file.name}</span>
                                                                <button 
                                                                    onClick={() => setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))}
                                                                    className="text-danger hover:text-danger-dark"
                                                                >
                                                                    <IconXCircle className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleSubmitResponse(selectedCase.id)}
                                                className="btn btn-success flex-1 gap-2"
                                                disabled={!responseText.trim() && uploadedFiles.length === 0}
                                            >
                                                <IconSend className="w-4 h-4" />
                                                Submit Response
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setResponseText('');
                                                    setUploadedFiles([]);
                                                }}
                                                className="btn btn-outline-danger"
                                            >
                                                Clear
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center py-8">
                                        <IconCheckCircle className="w-12 h-12 text-success mx-auto mb-3" />
                                        <h6 className="font-medium mb-2">Response Submitted</h6>
                                        <p className="text-sm text-gray-500 mb-4">
                                            Your response has been submitted and is under review by the internal team.
                                        </p>
                                        <div className="text-xs text-gray-500">
                                            Submitted on: {selectedCase.responseSubmitted}
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <IconMessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                <h6 className="font-medium mb-2">Select a Case</h6>
                                <p className="text-sm text-gray-500">
                                    Select a clarification request from the list to view details and respond
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeedsClarification;