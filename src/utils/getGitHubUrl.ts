import constants from '@/constants'

export default function getGitHubUrl(repoName: string): string {
  if (repoName.includes('/')) {
    // If repoName is a full path, just append to github.com
    return `https://github.com/${repoName}`
  }
  const githubUrl = `https://github.com/${constants.social.github}`
  return `${githubUrl}/${repoName}`
}
