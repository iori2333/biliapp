use tauri::{
  AppHandle, CustomMenuItem, Manager, SystemTray, SystemTrayEvent, SystemTrayMenu,
  SystemTrayMenuItem,
};

pub fn new() -> SystemTray {
  let quit = CustomMenuItem::new("quit", "退出");
  let hide = CustomMenuItem::new("hide", "隐藏");
  let settings = CustomMenuItem::new("settings", "设置");
  let menu = SystemTrayMenu::new()
    .add_item(settings)
    .add_item(hide)
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(quit);
  SystemTray::new().with_menu(menu)
}

fn show_window(app: &AppHandle) {
  app.windows().iter().for_each(|(_name, window)| {
    if !window.is_visible().unwrap() {
      window.show().unwrap();
    }
  });
  let window = app.get_window("main").unwrap();
  window.set_focus().unwrap();
}

fn hide_window(app: &AppHandle) {
  app.windows().iter().for_each(|(_name, window)| {
    if window.is_visible().unwrap() {
      window.hide().unwrap();
    }
  });
}

pub fn config(app: &AppHandle, event: SystemTrayEvent) {
  match event {
    SystemTrayEvent::LeftClick {
      position: _,
      size: _,
      ..
    } => show_window(app),

    SystemTrayEvent::MenuItemClick { id, .. } => match id.as_str() {
      "quit" => {
        show_window(app);
        app.emit_to("main", "tray-quit", ()).unwrap();
      }
      "hide" => hide_window(app),
      "settings" => {
        show_window(app);
        app.emit_to("main", "tray-settings", ()).unwrap();
      }
      _ => panic!("Unknown menu item: {}", id),
    },

    _ => {}
  }
}
