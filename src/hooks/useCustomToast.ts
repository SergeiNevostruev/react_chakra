import { toaster } from '@/components/ui/toaster';
import { useCallback } from 'react';


const useCustomToast = () => {

  const showToast = useCallback((title: string, description: string, status: "success" | "error") =>  {
    toaster.create({
      title,
      description, 
      type: status,
      action: {
        label: "x",
        onClick: () => {          
        }
      }
    })
  }, [])

  return showToast
}

export default useCustomToast
