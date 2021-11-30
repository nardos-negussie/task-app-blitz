import { styled } from "stitches.config"

const BaseInput = styled("input", {
  appearance: "none",
  backgroundColor: "$gray2",
  borderRadius: 4,
  border: "1px solid $gray5",
  color: "$gray12",
  fontFamily: "Poppins",
  variants: {
    size: {
      xs: {
        fontSize: 12,
        px: 8,
        py: 4,
      },
      sm: {
        fontSize: 14,
        px: 12,
        py: 6,
      },
      md: {
        fontSize: 16,
        px: 16,
        py: 8,
      },
      lg: {
        fontSize: 18,
        px: 24,
        py: 10,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export const Input = ({ children, ...props }: React.ComponentProps<typeof BaseInput>) => {
  return <BaseInput {...props} />
}
