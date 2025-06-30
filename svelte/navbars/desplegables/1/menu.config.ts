export const config = {
    menu: [
    {
      title: "Home",
      submenu: null,
      href: "/",
    },
    {
      title: "about",
      href: '/about'
    },
    {
      title: "Projects",
      submenu: [
        {
          title: "Projects 1",
          href: "#",
        },
      ],
    },
    {
      title: "Contacto",
      submenu: null,
    },
  ],
  style: {
    backgroundColor: '#1a1a1a',
    textColor: '#ffffff',
    nestingColor: 'black',
    menuHover: '#7c7c7c'
  }
}