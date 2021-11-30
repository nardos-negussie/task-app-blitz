import { styled } from "stitches.config"

const BaseButton = styled("button", {
  borderRadius: "6px",
  appearance: "none",
  cursor: "pointer",
  color: "$gray12",
  fontWeight: 600,
  maxHeight: "max-content",
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
    variant: {
      solid: {
        border: "1px solid transparent",
        backgroundColor: "$gray4",
        color: "$gray12",
      },
      outline: {
        backgroundColor: "transparent",
        border: "1px solid $colors$gray6",
      },
      ghost: {
        backgroundColor: "transparent",
        border: "1px solid transparent",
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "sm",
    variant: "solid",
  },
})

const Button = ({ children, ...props }: React.ComponentProps<typeof BaseButton>) => {
  return <BaseButton {...props}>{children}</BaseButton>
}

export default Button
