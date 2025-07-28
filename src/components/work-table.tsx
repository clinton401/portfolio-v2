import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";



export function WorkTable() {
    const experiences = [
      {
        time: "2024 – 2025",
        company: "Nobox Labs",
        position: "Full Stack Developer",
      },
      {
        time: "2022",
        company: "Xerax Labs Inc.",
        position: "Junior Frontend Developer",
      },
      {
        time: "2023",
        company: "Getlinked Hackathon",
        position: "Frontend Developer",
      },
    ];
    function getExperienceDuration(from = "2022-07-01") {
      const start = new Date(from);
      const now = new Date();

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();

      if (months < 0) {
        years--;
        months += 12;
      }

      return `${years} year${years !== 1 ? "s" : ""}${
        months > 0 ? ` ${months} month${months !== 1 ? "s" : ""}` : ""
      }`;
    }
      
  return (
    <Table className="border-t ">
      <TableCaption>A list of my work experiences.</TableCaption>
      <TableHeader className="cursor-pointer ">
        <TableRow className="">
          <TableHead className="max-w-[200px]">Year</TableHead>
          <TableHead className="">Company</TableHead>
          <TableHead className="">Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {experiences.map((experience) => (
          <TableRow
            key={experience.company}
            className="py-6 cursor-pointer "
          >
            <TableCell className="font-medium">{experience.time}</TableCell>
            <TableCell>{experience.company}</TableCell>
            <TableCell className="">{experience.position}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="cursor-pointer">
        <TableRow>
          <TableCell colSpan={2}>Work exprerience</TableCell>
          <TableCell className="text-right">
            {getExperienceDuration()}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
