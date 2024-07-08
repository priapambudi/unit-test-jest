import HomepageView from "@/components/pages/Home";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Typography from "@/components/ui/Typography";

export default function Home() {
  return (
    <div>
      {/* <Typography>Add A User </Typography>
      <Input type="text" label="Name" name="name" />
      <br />
      <Button onClick={() => {}}>Add User</Button> */}
      <HomepageView />
    </div>
  );
}
