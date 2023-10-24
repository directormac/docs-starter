---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/directormac.png',
    name: 'Director Mac',
    title: 'Artifex',
    links: [
      { icon: 'github', link: 'https://github.com/directormac' },
      { icon: 'twitter', link: 'https://twitter.com/markasena' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      This template was created by the awesome people
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
