// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "./table";

// import { Badge } from "./badge";
// import { Button } from "./button";
// import { MoreHorizontal, Plus, Users } from "lucide-react";

// const users = [
//   {
//     id: 1,
//     name: "Alex Johnson",
//     email: "alex@example.com",
//     role: "Admin",
//     status: "Active",
//     initials: "AJ",
//     color: "bg-violet-100 text-violet-700",
//     joined: "Oct 12, 2026",
//   },
//   {
//     id: 2,
//     name: "Sarah Miller",
//     email: "sarah@example.com",
//     role: "Developer",
//     status: "Active",
//     initials: "SM",
//     color: "bg-pink-100 text-pink-700",
//     joined: "Oct 10, 2026",
//   },
//   {
//     id: 3,
//     name: "Michael Brown",
//     email: "michael@example.com",
//     role: "Designer",
//     status: "Pending",
//     initials: "MB",
//     color: "bg-amber-100 text-amber-700",
//     joined: "Oct 08, 2026",
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     email: "emily@example.com",
//     role: "Developer",
//     status: "Inactive",
//     initials: "ED",
//     color: "bg-sky-100 text-sky-700",
//     joined: "Oct 05, 2026",
//   },
// ];

// export default function UsersTable() {
//   return (
//     <div className="min-h-screen bg-slate-50 p-6 md:p-10">
//       <div className="mx-auto max-w-6xl space-y-6">
//         {/* Header */}
//         <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//           <div>
//             <h1 className="text-3xl font-bold tracking-tight text-slate-900">
//               Team Members
//             </h1>
//             <p className="mt-2 text-sm text-slate-500">
//               Manage your team, roles, and account status.
//             </p>
//           </div>

//           <Button className="gap-2 rounded-xl shadow-sm">
//             <Plus className="h-4 w-4" />
//             Add member
//           </Button>
//         </div>

//         {/* Stats */}
//         <div className="grid gap-4 sm:grid-cols-3">
//           <div className="rounded-2xl border bg-white p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="text-sm text-slate-500">Total members</p>
//               <Users className="h-5 w-5 text-violet-500" />
//             </div>
//             <p className="mt-3 text-3xl font-bold">24</p>
//             <p className="mt-1 text-xs text-slate-400">
//               Across all departments
//             </p>
//           </div>

//           <div className="rounded-2xl border bg-white p-5 shadow-sm">
//             <p className="text-sm text-slate-500">Active members</p>
//             <p className="mt-3 text-3xl font-bold text-emerald-600">18</p>
//             <p className="mt-1 text-xs text-slate-400">
//               Currently active accounts
//             </p>
//           </div>

//           <div className="rounded-2xl border bg-white p-5 shadow-sm">
//             <p className="text-sm text-slate-500">Pending invitations</p>
//             <p className="mt-3 text-3xl font-bold text-amber-600">3</p>
//             <p className="mt-1 text-xs text-slate-400">
//               Waiting for a response
//             </p>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
//           <div className="flex items-center justify-between border-b px-6 py-5">
//             <div>
//               <h2 className="font-semibold text-slate-900">
//                 All members
//               </h2>
//               <p className="mt-1 text-sm text-slate-500">
//                 A list of your team members.
//               </p>
//             </div>

//             <Badge variant="secondary" className="rounded-lg px-3 py-1">
//               {users.length} members
//             </Badge>
//           </div>

//           <Table>
//             <TableHeader>
//               <TableRow className="bg-slate-50/80 hover:bg-slate-50/80">
//                 <TableHead className="pl-6">Member</TableHead>
//                 <TableHead>Role</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Joined date</TableHead>
//                 <TableHead className="pr-6 text-right">
//                   Actions
//                 </TableHead>
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {users.map((user) => (
//                 <TableRow key={user.id} className="group">
//                   <TableCell className="py-4 pl-6">
//                     <div className="flex items-center gap-3">
//                       <div
//                         className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${user.color}`}
//                       >
//                         {user.initials}
//                       </div>
//                       <div>
//                         <p className="font-medium text-slate-900">
//                           {user.name}
//                         </p>
//                         <p className="text-sm text-slate-500">
//                           {user.email}
//                         </p>
//                       </div>
//                     </div>
//                   </TableCell>

//                   <TableCell>
//                     <span className="text-sm text-slate-600">
//                       {user.role}
//                     </span>
//                   </TableCell>

//                   <TableCell>
//                     <Badge
//                       variant="outline"
//                       className={
//                         user.status === "Active"
//                           ? "border-emerald-200 bg-emerald-50 text-emerald-700"
//                           : user.status === "Pending"
//                           ? "border-amber-200 bg-amber-50 text-amber-700"
//                           : "border-slate-200 bg-slate-100 text-slate-600"
//                       }
//                     >
//                       <span
//                         className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
//                           user.status === "Active"
//                             ? "bg-emerald-500"
//                             : user.status === "Pending"
//                             ? "bg-amber-500"
//                             : "bg-slate-400"
//                         }`}
//                       />
//                       {user.status}
//                     </Badge>
//                   </TableCell>

//                   <TableCell className="text-sm text-slate-500">
//                     {user.joined}
//                   </TableCell>

//                   <TableCell className="pr-6 text-right">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       className="rounded-lg text-slate-500 hover:text-slate-900"
//                       aria-label={`Actions for ${user.name}`}
//                     >
//                       <MoreHorizontal className="h-4 w-4" />
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>

//           <div className="flex items-center justify-between border-t px-6 py-4">
//             <p className="text-sm text-slate-500">
//               Showing {users.length} of 24 members
//             </p>
//             <div className="flex gap-2">
//               <Button variant="outline" size="sm" disabled>
//                 Previous
//               </Button>
//               <Button variant="outline" size="sm">
//                 Next
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }