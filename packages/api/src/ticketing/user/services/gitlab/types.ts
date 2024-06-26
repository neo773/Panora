interface GitlabUser {
    id: number
    username: string
    email: string
    name: string
    state: string
    locked: boolean
    avatar_url: string
    web_url: string
    created_at: string
    is_admin: boolean
    bio: string
    location: any
    skype: string
    linkedin: string
    twitter: string
    discord: string
    website_url: string
    organization: string
    job_title: string
    last_sign_in_at: any
    confirmed_at: string
    theme_id: number
    last_activity_on: string
    color_scheme_id: number
    projects_limit: number
    current_sign_in_at: string
    identities: any[]
    can_create_group: boolean
    can_create_project: boolean
    two_factor_enabled: boolean
    external: boolean
    private_profile: boolean
    current_sign_in_ip: string
    last_sign_in_ip: string
    namespace_id: number
    created_by: any
    email_reset_offered_at: any
}

export type GitlabUserInput = Partial<GitlabUser>;
export type GitlabUserOutput = GitlabUserInput;
