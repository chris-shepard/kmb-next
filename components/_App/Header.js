
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


function Header() {
  const router = useRouter();
  router.pathname

  function isActive(route) {
    return route === router.pathname;
  }

  let routes = [
    {path:'/', label: 'Home'},
    {path:'/services', label: 'Services'},
    {path:'/pricing', label: 'Pricing'},
    {path:'/freequote', label: 'Free Quote'}

  ]

  return (
    <nav id="nav">
      <Link href="/" >
        <span className={isActive('/') ? 'nav-item is-active' : 'nav-item'}>Home</span>
      </Link>
      <Link href="/services" >
        <span className={isActive('/services') ? 'nav-item is-active' : 'nav-item'}>Services</span>
      </Link>
      <Link href="/pricing" >
        <span className={isActive('/pricing') ? 'nav-item is-active' : 'nav-item'}>Pricing</span>
      </Link>
      <Link href="/freequote">
        <span className={isActive('/freequote') ? 'nav-item is-active' : 'nav-item'}>Free Quote</span>
      </Link>
    </nav>
  );
}

export default Header;
