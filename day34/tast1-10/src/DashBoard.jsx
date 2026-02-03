function DashboardCard({ title, children }) {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}


function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardCard title="Users">
        <p>120 Active Users</p>
      </DashboardCard>
      <DashboardCard title="Revenue">
        <p>$5,000 this month</p>
      </DashboardCard>
    </div>
  );
}
