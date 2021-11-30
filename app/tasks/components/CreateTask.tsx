import Button from "app/core/components/Button"
import { Flex } from "app/core/components/Flex"
import { Input } from "app/core/components/Input"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { useMutation, invalidateQuery } from "blitz"
import { useState } from "react"
import createTask from "../mutations/createTask"
import getTasks from "../queries/getTasks"

export const CreateTask = () => {
  const currentUser = useCurrentUser()
  const [createTaskMutation] = useMutation(createTask)
  const [name, setText] = useState("")
  return (
    <Flex css={{ flexDirection: "column", mb: 8 }}>
      <Flex
        as="form"
        onSubmit={async (e) => {
          e.preventDefault()
          if (name.length > 0) {
            await createTaskMutation({ userId: currentUser!.id, name })
            invalidateQuery(getTasks)
            setText("")
          }
        }}
      >
        <Input
          value={name}
          onChange={(e) => setText(e.target.value)}
          placeholder="new task"
          css={{ width: "100%" }}
        />
        <Button type="submit" css={{ ml: 16 }}>
          Add
        </Button>
      </Flex>
    </Flex>
  )
}
