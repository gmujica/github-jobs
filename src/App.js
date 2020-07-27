import React, { useState } from 'react'
import useFetchJobs from './useFetchJobs'
import { Container, Spinner } from 'react-bootstrap'
import Job from './Job'
import JobsPagination from './JobsPagination'

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  // state
  const { jobs, loading, error } = useFetchJobs(params, page)

  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
      <JobsPagination 
        page={page} 
        setPage={setPage}
      />

      {loading && <Spinner size="xl" animation="border" variant="secondary" />}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map(job => {
        return <Job hey={job.id} job={job} />
      })}

      <JobsPagination 
        page={page} 
        setPage={setPage}
      />
    </Container>
  );
}

export default App
