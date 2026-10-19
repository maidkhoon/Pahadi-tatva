import {
  Activity,
  ArrowRight,
  Bell,
  Boxes,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  Clock3,
  CreditCard,
  Factory,
  FlaskConical,
  LayoutDashboard,
  Leaf,
  Menu,
  MessageCircle,
  Package,
  Plus,
  Search,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Users,
  Wallet,
  X,
} from "lucide-react";
import { useState } from "react";
import "./App.css";

type Section =
  | "Overview"
  | "Orders"
  | "Inventory"
  | "Suppliers"
  | "Quality & batches"
  | "Customers"
  | "Social channels"
  | "Finances"
  | "Settings";

const navigation: { label: Section; icon: typeof LayoutDashboard; group: string }[] = [
  { label: "Overview", icon: LayoutDashboard, group: "WORKSPACE" },
  { label: "Orders", icon: ShoppingCart, group: "WORKSPACE" },
  { label: "Inventory", icon: Boxes, group: "WORKSPACE" },
  { label: "Suppliers", icon: Users, group: "OPERATIONS" },
  { label: "Quality & batches", icon: FlaskConical, group: "OPERATIONS" },
  { label: "Customers", icon: ShoppingBag, group: "SALES & GROWTH" },
  { label: "Social channels", icon: MessageCircle, group: "SALES & GROWTH" },
  { label: "Finances", icon: Wallet, group: "SALES & GROWTH" },
  { label: "Settings", icon: Settings, group: "PREFERENCES" },
];

function App() {
  const [active, setActive] = useState<Section>("Overview");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState("");

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2800);
  };

  const grouped = ["WORKSPACE", "OPERATIONS", "SALES & GROWTH", "PREFERENCES"];

  const emptyCopy: Record<Section, { description: string; action: string }> = {
    Overview: {
      description: "Your business metrics will appear here after real records are added and the database is connected.",
      action: "Add your first record",
    },
    Orders: {
      description: "No orders are displayed because no live order records are connected yet.",
      action: "Create an order",
    },
    Inventory: {
      description: "Add real collection and packaging records to track stock. Stock will not be assumed or pre-filled.",
      action: "Add inventory record",
    },
    Suppliers: {
      description: "Add your actual suppliers and keep each supplier's collection lot traceable.",
      action: "Add supplier",
    },
    "Quality & batches": {
      description: "Record actual lot details and quality evidence here. No batch is treated as approved by default.",
      action: "Add a lot record",
    },
    Customers: {
      description: "Customer records will appear after they are added or captured from a connected sales workflow.",
      action: "Add customer",
    },
    "Social channels": {
      description: "No social accounts or enquiries are connected. You can still use your social profiles manually until integrations are configured.",
      action: "Set up channel",
    },
    Finances: {
      description: "Income, costs and profit will appear only after actual transactions are recorded.",
      action: "Add transaction",
    },
    Settings: {
      description: "Configure your business workspace after authentication and database setup are connected.",
      action: "Review setup",
    },
  };

  const isOverview = active === "Overview";

  return (
    <div className="app-shell">
      {mobileNavOpen && (
        <button
          className="mobile-scrim"
          aria-label="Close menu"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      <aside className={`sidebar ${mobileNavOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><Leaf size={23} strokeWidth={1.7} /></div>
          <div className="brand-copy">
            <span className="brand-name">pahadi <b>tatva</b></span>
            <span className="brand-caption">BUSINESS OS</span>
          </div>
          <button className="icon-button mobile-close" aria-label="Close navigation" onClick={() => setMobileNavOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <button className="workspace-switch" onClick={() => showNotice("Workspace settings will be available after login is connected.")}>
          <span className="workspace-avatar">PT</span>
          <span className="workspace-text"><strong>Pahadi Tatva</strong><small>Business workspace</small></span>
          <ChevronDown size={15} className="muted-icon" />
        </button>

        <nav className="side-navigation">
          {grouped.map((group) => (
            <div className="nav-group" key={group}>
              <div className="nav-heading">{group}</div>
              {navigation.filter((item) => item.group === group).map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  className={`nav-item ${active === label ? "nav-item-active" : ""}`}
                  onClick={() => { setActive(label); setMobileNavOpen(false); }}
                >
                  <Icon size={18} strokeWidth={1.8} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="pilot-card">
            <div className="pilot-icon"><Leaf size={17} /></div>
            <div><strong>Traceable by design</strong><p>Record real data, lot by lot.</p></div>
            <span className="pilot-status" />
          </div>
          <button className="nav-item help-link" onClick={() => showNotice("Help documentation has not been added yet.")}>
            <CircleHelp size={18} /><span>Help & support</span>
          </button>
          <div className="profile-row">
            <div className="profile-avatar"><Users size={17} /></div>
            <div className="profile-copy"><strong>Workspace user</strong><small>Login not connected</small></div>
            <button className="icon-button" aria-label="Profile options" onClick={() => showNotice("Authentication is not connected yet.")}>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="topbar-left">
            <button className="icon-button menu-button" aria-label="Open navigation" onClick={() => setMobileNavOpen(true)}>
              <Menu size={21} />
            </button>
            <div className="breadcrumbs"><span>Workspace</span><span className="crumb-slash">/</span><strong>{active}</strong></div>
          </div>
          <div className="topbar-actions">
            <label className="search-box">
              <Search size={17} />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search workspace..." aria-label="Search workspace" />
            </label>
            <button className="icon-button notification-button" aria-label="Notifications" onClick={() => showNotice("Notifications will appear when live workflows are connected.")}>
              <Bell size={19} />
            </button>
            <div className="topbar-divider" />
            <div className="date-label"><span className="date-dot" /> Not connected</div>
          </div>
        </header>

        <div className="page-content">
          <div className="demo-banner">
            <span className="demo-badge">NO LIVE DATA</span>
            <span>Business records are not connected yet. No sample figures or fake orders are shown.</span>
            <button onClick={() => showNotice("Database and authentication setup are still required.")}>Setup status <ArrowRight size={14} /></button>
          </div>

          {isOverview ? (
            <>
              <section className="welcome-row">
                <div>
                  <div className="eyebrow"><span className="eyebrow-line" /> PAHADI TATVA BUSINESS OS</div>
                  <h1>Namaste <span className="wave">✳</span></h1>
                  <p className="page-subtitle">Your business workspace, ready for real records.</p>
                </div>
                <button className="primary-button" onClick={() => { setActive("Orders"); showNotice("Order creation will work after the database is connected."); }}>
                  <Plus size={17} /> Create an order
                </button>
              </section>

              <section className="stats-grid" aria-label="Business summary">
                {[
                  { label: "Gross sales", icon: Wallet, tone: "icon-green" },
                  { label: "Total orders", icon: ShoppingCart, tone: "icon-blue" },
                  { label: "Available stock", icon: Package, tone: "icon-amber" },
                  { label: "Pending actions", icon: ClipboardList, tone: "icon-purple" },
                ].map(({ label, icon: Icon, tone }) => (
                  <article className="stat-card" key={label}>
                    <div className="stat-top"><span className={`stat-icon ${tone}`}><Icon size={19} /></span></div>
                    <div className="stat-label">{label}</div>
                    <div className="stat-value">—</div>
                    <div className="stat-foot"><span>Awaiting real records</span></div>
                  </article>
                ))}
              </section>

              <section className="middle-grid">
                <article className="panel inventory-panel">
                  <div className="panel-heading">
                    <div><div className="section-kicker">PRODUCT OVERVIEW</div><h2>Ghee inventory</h2></div>
                    <button className="text-button" onClick={() => setActive("Inventory")}>View inventory <ArrowRight size={15} /></button>
                  </div>
                  <div className="module-empty">
                    <div className="module-empty-icon"><Package size={27} /></div>
                    <h2>No inventory records</h2>
                    <p>Actual stock will appear here after collection and packaging records are entered.</p>
                    <button className="primary-button" onClick={() => setActive("Inventory")}><Plus size={17} /> Add inventory record</button>
                  </div>
                </article>

                <article className="panel attention-panel">
                  <div className="panel-heading"><div><div className="section-kicker">WORKFLOW</div><h2>Business setup</h2></div></div>
                  <div className="task-row"><span className="task-icon task-blue"><Factory size={17} /></span><span className="task-copy"><strong>Add supplier records</strong><small>Enter real supplier details and collection terms.</small></span></div>
                  <div className="task-row"><span className="task-icon task-rose"><FlaskConical size={17} /></span><span className="task-copy"><strong>Record quality evidence</strong><small>Do not mark a lot approved without evidence.</small></span></div>
                  <div className="task-row"><span className="task-icon task-gold"><ShoppingBag size={17} /></span><span className="task-copy"><strong>Configure order workflow</strong><small>Connect the database before recording sales.</small></span></div>
                  <div className="attention-footer"><Activity size={15} /><span>Keep each lot traceable before sale.</span></div>
                </article>
              </section>

              <section className="bottom-grid">
                <article className="panel orders-panel">
                  <div className="panel-heading"><div><div className="section-kicker">SALES</div><h2>Recent orders</h2></div><button className="text-button" onClick={() => setActive("Orders")}>All orders <ArrowRight size={15} /></button></div>
                  <div className="empty-search">No order records are available yet.</div>
                </article>
                <article className="panel channels-panel">
                  <div className="panel-heading"><div><div className="section-kicker">OMNICHANNEL SALES</div><h2>Social channels</h2></div><span className="live-label"><span /> NOT CONNECTED</span></div>
                  <p className="panel-description">No social accounts or enquiries are connected.</p>
                  <div className="channel-list">
                    {[
                      { name: "WhatsApp", detail: "Manual capture until integration", icon: MessageCircle, tone: "whatsapp" },
                      { name: "Instagram", detail: "Manual capture until integration", icon: Activity, tone: "instagram" },
                      { name: "Facebook", detail: "Manual capture until integration", icon: Users, tone: "facebook" },
                    ].map(({ name, detail, icon: Icon, tone }) => (
                      <div className="channel-row" key={name}>
                        <span className={`channel-icon ${tone}`}><Icon size={18} /></span>
                        <span className="channel-copy"><strong>{name}</strong><small>{detail}</small></span>
                      </div>
                    ))}
                  </div>
                  <button className="connect-button" onClick={() => setActive("Social channels")}><Plus size={16} /> Configure channels</button>
                </article>
              </section>

              <footer className="page-footer"><span>© Pahadi Tatva · Business OS</span><span><span className="footer-dot" /> Awaiting database connection</span></footer>
            </>
          ) : (
            <section className="module-page">
              <div className="eyebrow"><span className="eyebrow-line" /> PAHADI TATVA BUSINESS OS</div>
              <div className="module-title-row">
                <div><h1>{active}</h1><p className="page-subtitle">Manage {active.toLowerCase()} in your workspace.</p></div>
                <span className="demo-badge">NOT CONNECTED</span>
              </div>
              <div className="module-empty">
                <div className="module-empty-icon">
                  {active === "Orders" ? <ShoppingCart size={27} /> :
                    active === "Inventory" ? <Boxes size={27} /> :
                    active === "Suppliers" ? <Users size={27} /> :
                    active === "Quality & batches" ? <FlaskConical size={27} /> :
                    active === "Social channels" ? <MessageCircle size={27} /> :
                    active === "Finances" ? <CreditCard size={27} /> :
                    active === "Customers" ? <ShoppingBag size={27} /> : <Settings size={27} />}
                </div>
                <h2>{active === "Settings" ? "Workspace setup" : `No ${active.toLowerCase()} records`}</h2>
                <p>{emptyCopy[active].description}</p>
                <button className="primary-button" onClick={() => showNotice("This action will be enabled after authentication and database setup.")}>
                  <Plus size={17} /> {emptyCopy[active].action}
                </button>
                <div className="module-notes"><span><CheckCircle2 size={15} /> No sample records</span><span><Clock3 size={15} /> Database not connected</span></div>
              </div>
              <footer className="page-footer"><span>© Pahadi Tatva · Business OS</span><span><span className="footer-dot" /> Awaiting database connection</span></footer>
            </section>
          )}
        </div>
      </main>
      {notice && <div className="toast" role="status"><CheckCircle2 size={18} />{notice}<button aria-label="Dismiss notification" onClick={() => setNotice("")}><X size={15} /></button></div>}
    </div>
  );
}

export default App;
