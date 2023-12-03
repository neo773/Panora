import './App.css'
import { ThemeProvider } from '@/components/theme-provider'
import DashboardPage from './components/dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobsPage from './components/jobs';
import ConnectionsPage from './components/connections';
import TaskPage from './components/jobs/JobsTable';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/connections" element={<ConnectionsPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App