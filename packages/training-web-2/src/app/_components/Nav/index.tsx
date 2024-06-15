"use client"; // ★: "use client" ディレクティブを追加する

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";
import {IconButton} from "@/app/_components/Nav/IconButton";

function getAriaCurrent(flag: boolean) {
  return flag ? { "aria-current": "page" as const } : undefined;
}

export function Nav() {
  // ★: usePathname Hook を使用して、現在のパスを取得したい
  const pathName = usePathname();
  const openModal = () => {

  }
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/" {...getAriaCurrent(pathName === "/")}>
            トップ
          </Link>
        </li>
        <li>
          <Link
            href="/categories"
            {...getAriaCurrent(pathName.startsWith("/categories"))}
          >
            カテゴリー一覧
          </Link>
        </li>
      </ul>
      <IconButton onClick={openModal}>写真を投稿する</IconButton>
    </nav>
  );
}
