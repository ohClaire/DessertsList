import { UserProvider, useUser } from "./UserContext";

const LoggedInUser = () => {
  const { user } = useUser();
  return (
    <p>
      Hello <span className="username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog Post</h2>
      <LoggedInUser />
    </header>
  );
};

const Post = () => {
  const { user } = useUser();
  return (
    <div>
      <h3>What is the word of the day?</h3>
      <p>
        <strong>Frenetic: </strong> : marked by fast and energetic, disordered,
        or anxiety-driven activity. In modern use, frenetic can describe a
        focused and intense effort to meet a deadline, or dancing among a
        hyped-up crowd, but the word’s Middle English predecessor, frenetik, had
        a more specific meaning than “frantic or wild”: it was originally used
        to describe those exhibiting a severely disordered state of mind. If you
        trace frenetic back far enough, you’ll find that it comes from Greek
        phrenîtis, a term referring to an inflammation of the brain. (Phren, the
        Greek word for “mind” (among other meanings) is a root recognizable in
        schizophrenic.) As for frenzied and frantic, they’re not only synonyms
        of frenetic but relatives as well. Frantic comes from frenetik, and
        frenzied traces back to phrenîtis.
      </p>
      <p>Written by {user.name}</p>
    </div>
  );
};

function Blog() {
  return (
    <div>
      <Header />
      <Post />
    </div>
  );
}
export default Blog;
