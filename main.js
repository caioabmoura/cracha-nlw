const linksSocialMedia = {
  github: 'caioabmoura',
  twitter: 'caioabmoura',
  instagram: 'caioabmoura',
  facebook: 'caioabmoura',
  youtube: 'UCm8RE_uCJOyog-fRG3pcc4A'
}

function changeSocialMediaLinks() {
  userName.textContent = 'Caio Alves'
  // controlador é li referente a cada filho do elemento id => socialLinks
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      avatarImg.src = data.avatar_url
      //userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
