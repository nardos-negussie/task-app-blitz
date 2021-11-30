import { Box } from "app/core/components/Box"
import Button from "app/core/components/Button"
import { Flex } from "app/core/components/Flex"
import { useQuery, useMutation, invalidateQuery } from "blitz"
import { Suspense } from "react"
import deleteTask from "../mutations/deleteTask"
import updateTask from "../mutations/updateTask"
import getTasks from "../queries/getTasks"

export const TaskList = () => {
  const [{ tasks }] = useQuery(getTasks, {
    orderBy: {
      createdAt: "asc",
    },
  })
  const [updateTaskMutation] = useMutation(updateTask)
  const [deleteTaskMutation] = useMutation(deleteTask)
  return (
    <Suspense fallback={"..loading"}>
      <Box>
        {tasks.map((task, index) => (
          <Flex
            css={{
              transition: "all .2s ease-in-out",
              cursor: "pointer",
              height: 46,
              alignItems: "center",
              px: 16,
              "&:hover": {
                backgroundColor: "$gray2",
              },
              "&:hover .delete-btn": {
                opacity: 1,
              },
            }}
            key={index}
          >
            <Box
              onClick={async () => {
                await updateTaskMutation({ id: task.id, completed: !task.completed })
                invalidateQuery(getTasks)
              }}
              css={{
                flex: "1",
                textDecoration: task.completed ? "line-through" : undefined,
              }}
            >
              {task.name}
            </Box>
            <Button
              onClick={async () => {
                await deleteTaskMutation({ id: task.id })
                invalidateQuery(getTasks)
              }}
              variant="ghost"
              className="delete-btn"
              css={{ opacity: 0, transition: "all .4s ease-in-out" }}
            >
              Delete
            </Button>
          </Flex>
        ))}
      </Box>
    </Suspense>
  )
}
