import { QueryClient, QueryClientProvider } from "react-query"
import {ReactQueryDevtools} from "react-query/devtools"
import { AppRouter } from "./router/AppRouter"

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter/>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  )
}
