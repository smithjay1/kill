import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Users,
  Search,
  Download,
  RefreshCw,
  Calendar,
  Mail,
  Phone,
  BookOpen,
} from "lucide-react";

interface EnrollmentData {
  id: string;
  studentInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  courseInfo: {
    id: string;
    category: string;
    level: string;
    description: string;
    originalPrice?: string;
    price: string;
    duration: string;
  };
  timestamp: string;
  status: string;
}

export default function Admin() {
  const [enrollments, setEnrollments] = useState<EnrollmentData[]>([]);
  const [filteredEnrollments, setFilteredEnrollments] = useState<EnrollmentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchEnrollments = async () => {
    try {
      setLoading(true);
      const response = await fetch('/.netlify/functions/enrollments');
      const data = await response.json();
      setEnrollments(data.enrollments || []);
      setFilteredEnrollments(data.enrollments || []);
    } catch (error) {
      console.error('Failed to fetch enrollments:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

  useEffect(() => {
    let filtered = enrollments;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((enrollment) =>
        enrollment.studentInfo.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enrollment.studentInfo.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enrollment.studentInfo.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enrollment.courseInfo.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enrollment.courseInfo.level.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by status
    if (statusFilter !== "all") {
      filtered = filtered.filter((enrollment) => enrollment.status === statusFilter);
    }

    setFilteredEnrollments(filtered);
  }, [searchTerm, statusFilter, enrollments]);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending_payment: { color: "bg-yellow-500", text: "Pending Payment" },
      proof_submitted_whatsapp: { color: "bg-green-500", text: "Proof via WhatsApp" },
      proof_submitted_email: { color: "bg-blue-500", text: "Proof via Email" },
      confirmed: { color: "bg-purple-500", text: "Confirmed" },
      completed: { color: "bg-gray-500", text: "Completed" }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || 
                   { color: "bg-gray-400", text: status };

    return (
      <Badge className={`${config.color} text-white`}>
        {config.text}
      </Badge>
    );
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Name', 'Email', 'Phone', 'Course Category', 'Course Level', 'Price', 'Status', 'Date'],
      ...filteredEnrollments.map(enrollment => [
        `${enrollment.studentInfo.firstName} ${enrollment.studentInfo.lastName}`,
        enrollment.studentInfo.email,
        enrollment.studentInfo.phone,
        enrollment.courseInfo.category,
        enrollment.courseInfo.level,
        enrollment.courseInfo.price,
        enrollment.status,
        new Date(enrollment.timestamp).toLocaleDateString()
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `enrollments-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const uniqueStatuses = [...new Set(enrollments.map(e => e.status))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F05633beba53c4764bcf34c72b523c1b7%2F4a06828822da45c4870e6864312e9b18?format=webp&width=800"
                alt="AETHER HUB Logo"
                className="w-8 h-8"
              />
              <div className="text-xl font-bold text-gray-800">
                AETHER HUB - Admin Dashboard
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => window.location.href = '/'}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-brand-blue mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Total Enrollments</p>
                  <p className="text-2xl font-bold text-gray-900">{enrollments.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-green-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {enrollments.filter(e => 
                      new Date(e.timestamp).getMonth() === new Date().getMonth()
                    ).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="w-8 h-8 text-purple-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Pending Payment</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {enrollments.filter(e => e.status === 'pending_payment').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Mail className="w-8 h-8 text-blue-500 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Proof Submitted</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {enrollments.filter(e => 
                      e.status.includes('proof_submitted')
                    ).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Actions */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search by name, email, or course..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="all">All Statuses</option>
                  {uniqueStatuses.map(status => (
                    <option key={status} value={status}>
                      {status.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={fetchEnrollments} disabled={loading}>
                  <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
                <Button onClick={exportToCSV} disabled={filteredEnrollments.length === 0}>
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enrollments Table */}
        <Card>
          <CardContent className="p-0">
            {loading ? (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue mx-auto mb-4"></div>
                <p className="text-gray-600">Loading enrollments...</p>
              </div>
            ) : filteredEnrollments.length === 0 ? (
              <div className="p-8 text-center">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No enrollments found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredEnrollments.map((enrollment) => (
                      <TableRow key={enrollment.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium text-gray-900">
                              {enrollment.studentInfo.firstName} {enrollment.studentInfo.lastName}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center text-sm text-gray-600">
                              <Mail className="w-3 h-3 mr-1" />
                              {enrollment.studentInfo.email}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Phone className="w-3 h-3 mr-1" />
                              {enrollment.studentInfo.phone}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium text-gray-900">{enrollment.courseInfo.level}</p>
                            <p className="text-sm text-gray-600">{enrollment.courseInfo.category}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            {enrollment.courseInfo.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                {enrollment.courseInfo.originalPrice}
                              </span>
                            )}
                            <span className="font-bold text-brand-blue">
                              {enrollment.courseInfo.price}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(enrollment.status)}
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-gray-600">
                            {new Date(enrollment.timestamp).toLocaleDateString()}
                            <div className="text-xs text-gray-500">
                              {new Date(enrollment.timestamp).toLocaleTimeString()}
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
