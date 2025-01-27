export const bannerVariants = ["multi", "single"];
export const bannerTypes = ["neutral", "success", "warning", "error"];

export const bannerSizeClasses = {
  multi: {
    container: "p-6", // more padding for multi-line
    title: "text-base mb-1 font-bold", // larger text with margin bottom
    description: "text-sm", // smaller text for description
  },
  single: {
    container: "p-5", // less padding for single line
    title: "text-sm font-bold", // smaller text since it's single line
  },
};

export const bannerTypeClasses = {
  success: {
    bg: "bg-green-50 rounded-lg",
    text: "text-green-800",
    icon: "✓",
  },
  warning: {
    bg: "bg-yellow-50 rounded-lg",
    text: "text-yellow-800",
    icon: "⚠",
  },
  error: {
    bg: "bg-red-50 rounded-lg",
    text: "text-red-800",
    icon: "⨉",
  },
  neutral: {
    bg: "bg-blue-50 rounded-lg",
    text: "text-blue-800",
    icon: "ℹ",
  },
};

export const bannerContent = {
  success: {
    multi: {
      title: "Congratulations!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui pariatur, ipsum similique veniam.",
    },
    single: {
      title: "Congratulations!",
    },
  },
  warning: {
    multi: {
      title: "Attention",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    },
    single: {
      title: "Attention",
    },
  },
  error: {
    multi: {
      title: "There is a problem with your application",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    },
    single: {
      title: "There is a problem with your application",
    },
  },
  neutral: {
    multi: {
      title: "Update available",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliqui pariatur, ipsum similique veniam.",
    },
    single: {
      title: "Update available",
    },
  },
};
