import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Typography from "@/components/ui/Typography";

const HomepageView = () => {
  return (
    <div>
      <Typography>Add a User</Typography>
      <Typography type="p">Form</Typography>
      <Input type="text" label="name" name={"name"} />
      <br />
      <Input type="text" label="email" name={"email"} />
      <br />
      <Button onClick={() => console.log("clicked")}>Submit</Button>
    </div>
  );
};

export default HomepageView;
