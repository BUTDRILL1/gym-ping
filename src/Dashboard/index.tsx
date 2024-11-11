import bg from './../assets/Dashboard.png'; 

function Dashboard() {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Blur Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-white">Dashboard</h1>
        <h1 className="text-6xl font-bold text-white">Coming Soon!</h1>
        <p className="text-xl text-gray-200 mt-4">Stay tuned for your Fitness Tracker Dashboard</p>
      </div>
    </div>
  );
}

export default Dashboard;
