import useAuth from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

function TopNav() {
  const [auth, , , logout] = useAuth();

  return (
    <div className="my-3">
      <div className="flex place-content-between gap-4">
        <NavLink to="/" className="px-4 py-3 font-semibold">
          SeungAh's Blog
        </NavLink>
        <div className="flex">
          <MyLink to="/blog/">블로그</MyLink>
          <MyLink to="/news/">뉴스룸</MyLink>

          {/* 로그인이 아닐 때(logout) 보여 줄것  */}
          {!auth.isLoggedIn && (
            <>
              <MyLink to="/accounts/login/">로그인</MyLink>
              <MyLink to="#">회원가입</MyLink>
            </>
          )}

          {/* 로그인 일 떄 보여 줄것 */}
          {auth.isLoggedIn && (
            <>
              <MyLink to="/accounts/profile/">프로필</MyLink>
              <button onClick={() => logout()} className={baseClassName}>
                로그아웃
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function MyLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        baseClassName + ' ' + (isActive ? 'border-b-4 border-red-400' : '')
      }
    >
      {children}
    </NavLink>
  );
}

const baseClassName =
  'px-4 pt-3 pb-2 font-semibold hover:bg-red-200 hover:text-red-500 hover:text-white';

export default TopNav;
