import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="container pt-8 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="#">
              <a>
                <img src="/assets/logo.svg" alt="" width="40"/>
              </a>
            </Link>
          </div>
          <div>
            <Link href="#">
              <a className="text-white font-medium uppercase hover:font-bold text-center">
                {"Home"}
              </a>
            </Link>
          </div>
          <div>
            <Link href="#">
              <a className="text-white font-medium uppercase hover:font-bold text-center">
                {"Gallery"}
              </a>
            </Link>
          </div>
          <div>
            <Link href="#">
              <a className="text-white font-medium uppercase hover:font-bold text-center">
                {"Product"}
              </a>
            </Link>
          </div>
          <div>
            <Link href="#">
              <a className="text-white font-medium uppercase hover:font-bold text-center">
                {"Review"}
              </a>
            </Link>
          </div>
          <div>
            <Link href="#">
              <a className="text-white font-medium uppercase hover:font-bold text-center">
                {"Support"}
              </a>
            </Link>
          </div>
          <div>
            <Link href="#">
              <a>
                <img src="/assets/search.svg" alt="" width="20"/>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
