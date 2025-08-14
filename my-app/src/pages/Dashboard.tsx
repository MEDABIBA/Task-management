import AppLayout from "../layouts/AppLayout";
import { useStore } from "../stores/StoreContext";
const Dashboard = () => {
  const store = useStore();
  const message = store.getMessage();
  return (
    <AppLayout>
      <h1>Контент буде тут: {message}</h1>
    </AppLayout>
  );
};

export default Dashboard;
