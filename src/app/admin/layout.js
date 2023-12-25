import MenuSuperiorAdmin from "./components/shared/MenuSuperiorAdmin";

export default function LayoutAdmin({ children }) {
  return (
    <div className="h-screen mr-8 ml-8 mt-8">
        <MenuSuperiorAdmin/>
      {children}
    </div>
  );
}
