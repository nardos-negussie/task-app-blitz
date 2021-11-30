import logout from "app/auth/mutations/logout"
import { Box } from "app/core/components/Box"
import Button from "app/core/components/Button"
import { Flex } from "app/core/components/Flex"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import Layout from "app/core/layouts/Layout"
import { CreateTask } from "app/tasks/components/CreateTask"
import { TaskList } from "app/tasks/components/TaskList"
import { BlitzPage, Image, Link, Routes, useMutation } from "blitz"
import logo from "public/logo.png"
import { Suspense } from "react"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <Box css={{ display: "flex", alignItems: "center" }}>
        <Button
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </Button>
      </Box>
    )
  } else {
    return (
      <Flex css={{ gap: 8 }}>
        <Link href={Routes.SignupPage()}>
          <Button className="button small">
            <strong>Sign Up</strong>
          </Button>
        </Link>
        <Link href={Routes.LoginPage()}>
          <Button className="button small">
            <strong>Login</strong>
          </Button>
        </Link>
      </Flex>
    )
  }
}

const Task = () => {
  const currentUser = useCurrentUser()
  if (!currentUser)
    return (
      <Flex css={{ alignItems: "center", justifyContent: "center", flex: "1" }}>Please Login</Flex>
    )
  return (
    <Box css={{ maxWidth: "550px", mx: "auto", px: 16, pt: 16 }}>
      <CreateTask />
      <TaskList />
    </Box>
  )
}

const Home: BlitzPage = () => {
  return (
    <Flex css={{ flexDirection: "column", height: "100vh" }}>
      <Suspense fallback="Loading...">
        <Flex
          css={{
            justifyContent: "space-between",
            px: 24,
            height: 50,
            alignItems: "center",
            borderBottom: "1px solid $gray6",
          }}
        >
          <Box>Task App</Box>
          <UserInfo />
        </Flex>
        <Task />
      </Suspense>
    </Flex>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
