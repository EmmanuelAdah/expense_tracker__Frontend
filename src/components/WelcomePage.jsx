import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Wallet, PieChart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
      <div>
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white px-6 backdrop-blur-md"
    style={{padding: '60px', borderRadius: '10px', boxShadow: '0 0 20px 5px rgba(100,221,203,1.8)', margin: '50px auto', backdropFilter: 'blur(10px)'}}
    >
      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-3 mb-6 flex-row"
      >
        <h1 className="text-3xl font-bold"><TrendingUp size={70}
        style={{marginRight: '20px'}}
        />ExpenseFlow</h1>
          <br/>
      </motion.div>

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-center max-w-lg"
      >
        <h2 className="text-4xl font-extrabold mb-4">Take Control of Your Finances</h2>
        <p className="text-lg text-white/90 mb-8">
          Track your expenses, manage budgets, and visualize your financial goals — all in one.
        </p>
      </motion.div>
        <br/>
      {/* Icons Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex gap-6 mb-10"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-white/10 p-4 rounded-2xl backdrop-blur-md"
        >
          <PieChart size={28} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-white/10 p-4 rounded-2xl backdrop-blur-md"
        >
            <TrendingUp size={28} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-white/10 p-4 rounded-2xl backdrop-blur-md"
        >
            <Wallet size={28} />
        </motion.div>
      </motion.div>
        <br/>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          to="/register"
          className="flex items-center justify-center gap-2 border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
        style={{backgroundColor: 'green', width: '150px', color: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif', padding: '10px'}}
        >
          Get Started <ArrowRight size={18} />
        </Link>
      </motion.div>
    </div>
      <footer style={{bottom: 0, position: 'absolute', marginLeft: '15%'}}>
          <p className="mt-10 text-white/70 text-sm">
            © 2025 ExpenseFlow. Manage smarter, live better.
          </p>
      </footer>

   </div>
  );
};

export default WelcomePage;