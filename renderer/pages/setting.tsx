import Layout from "../components/Layout";
import Time from "../components/time";
const SettingsPage = () => {
  return (
    <Layout title="Settings">
      <p>設定のページ</p>
      <p className="m-16">
        <a href="/" className="text-blue-400 m-16">
          戻る
        </a>
      </p>
    </Layout>
  );
};

export default SettingsPage;
