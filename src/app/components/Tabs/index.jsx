import "./Tabs.css";

const Tabs = ({ tabList, currentTab, setTab }) => {
  console.log(currentTab);

  return (
    <div className="tabs-container-wrapper">
      <div
        className="tabs-container"
        style={{
          gridTemplateColumns: `repeat(${tabList.length},1fr)`,
        }}
      >
        <div
          className="slider"
          style={{
            "--tabWidth": `calc(100% / ${tabList.length})`,
            "--currentTabIndex": `${tabList.findIndex(
              (item) => item.key === currentTab
            )}`,
            width: "var(--tabWidth)",
            transform: `translateX(calc(var(--currentTabIndex) * 100%))`,
          }}
        ></div>
        {tabList.map(({ key, name }) => (
          <div
            key={key}
            className={`${key === currentTab ? "active" : ""} tab-item`}
            onClick={() => setTab(key)}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
