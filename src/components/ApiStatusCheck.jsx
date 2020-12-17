import { useEffect, useState} from 'react'

const ApiStatusCheck = ({ children }) => {
  const [apiStatus, setApiStatus] = useState('checking')

  const statusCheck = async () => {
    try {
      await fetch('https://johnboy.ngrok.io/ping')
      setApiStatus('online')
    } catch {
      setApiStatus('offline')
    }
  }

  useEffect(() => {
    statusCheck()
  }, [])

  if (apiStatus === 'checking') {
    return 'Checking API status'
  }

  if (apiStatus === 'offline') {
    return 'API offline, try again later'
  }

  return children;
}

export default ApiStatusCheck;
