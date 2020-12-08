import Layout from "../components/Layout";
import Time from "../components/time";
const SettingsPage = () => {
  return (
    <Layout title="Settings">
      <p>設定のページ</p>
      <p>
        <a href="/" className="text-blue-400">
          戻る
        </a>
      </p>
    </Layout>
  );
};

export default SettingsPage;
