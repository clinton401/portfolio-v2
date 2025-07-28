import {type FC} from "react";

import { Github, MoveUpRight, Link } from "lucide-react";
import { Button } from "./ui/button";


export const Links: FC<{isGithubLink?: boolean; url?: string}> = ({isGithubLink = true, url=  "https://github.com/clinton401"}) => {
    return (
      <div className="flex w-[85px]  relative">
        <Button
          className="size-[50px] rounded-full"
          size="lg"
          variant="outline"
          asChild
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
          {  isGithubLink ? <Github className="size-5" /> : <Link className="size-5" />}
          </a>
        </Button>
        <Button
          className="size-[50px] absolute top-0 bg-white right-0 rounded-full"
          size="lg"
          asChild
        >
           <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MoveUpRight className="size-5" />
          </a>
        </Button>
      </div>
    );
}