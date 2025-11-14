export default function UserStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? 'logged in' : 'NOT logged in'}
    </div>
  )
}