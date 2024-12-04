import { CircleStackIcon, CloudIcon, CpuChipIcon, CursorArrowRippleIcon, DevicePhoneMobileIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"

export const TechStackContent = [
    {
        icon: <CloudIcon className="w-8 h-8 text-primary sm:w-10 sm:h-10" />,
        title: "Cloud Computing",
        description: "AWS, Azure, Google Cloud, Docker, Kubernetes, Terraform, Heroku, Jenkins, Firebase, Cloudflare."
    },
    {
        icon: <CircleStackIcon className="w-8 h-8 text-primary sm:w-10 sm:h-10" />,
        title: "Data Science",
        description: "MongoDB, PostgreSQL, MySQL, Redis, Elasticsearch, BigQuery, Cassandra, Hadoop, Spark."
    },
    {
        icon: <CursorArrowRippleIcon className="w-8 h-8 text-primary sm:w-10 sm:h-10" />,
        title: "Web App Development",
        description: "React, Angular, Vue.js, Svelte, Tailwind CSS, Bootstrap, HTML5, CSS3, JavaScript, TypeScript."
    },
    {
        icon: <CpuChipIcon className="w-8 h-8 text-primary sm:w-10 sm:h-10" />,
        title: "Backend Computing",
        description: "Node.js, Django, Ruby on Rails, Express, Flask, Spring Boot, .NET, Java, Go."
    },
    {
        icon: <WrenchScrewdriverIcon className="w-8 h-8 text-primary sm:w-10 sm:h-10" />,
        title: "CI/CD DevOps",
        description: "Jenkins, GitLab CI/CD, Kubernetes, Docker, Terraform, Ansible, Chef, Puppet, Prometheus."
    },
    {
        icon: <DevicePhoneMobileIcon className="w-8 h-8 text-primary sm:w-10 sm:h-10" />,
        title: "Mobile Apps",
        description: "React Native, Flutter, Swift, Kotlin, Xamarin, Ionic, Android Studio, Xcode, Cordova."
    }
]
