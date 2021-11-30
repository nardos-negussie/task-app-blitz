import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  AuthenticationError,
  AuthorizationError,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
} from "blitz"
import LoginForm from "app/auth/components/LoginForm"
import { darkTheme, globalCss } from "stitches.config"
import { Box } from "app/core/components/Box"

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  body: {
    fontFamily: "'Poppins', sans-serif",
    color: "$gray12",
  },
})

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={useQueryErrorResetBoundary().reset}
    >
      <Box
        className={darkTheme}
        css={{
          backgroundColor: "$gray1",
          color: "$gray12",
          overflow: "hidden",
          minHeight: "100vh",
        }}
      >
        {getLayout(<Component {...pageProps} />)}
      </Box>
    </ErrorBoundary>
  )
}

function RootErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <LoginForm onSuccess={resetErrorBoundary} />
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
    )
  }
}
