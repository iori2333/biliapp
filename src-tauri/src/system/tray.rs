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

pub fn config(app: &AppHandle, event: SystemTrayEvent) {
  let show_window = |app: &AppHandle| {
    let window = app.get_window("main").unwrap();
    if !window.is_visible().unwrap() {
      window.show().unwrap();
    }
    window.set_focus().unwrap();
  };

  match event {
    SystemTrayEvent::LeftClick {
      position: _,
      size: _,
      ..
    } => {
      let window = app.get_window("main").unwrap();
      if window.is_visible().unwrap() {
        window.hide()
      } else {
        window.show()
      }
      .unwrap();
    }

    SystemTrayEvent::MenuItemClick { id, .. } => match id.as_str() {
      "quit" => {
        show_window(app);
        app.emit_to("main", "tray-quit", ()).unwrap();
      }
      "hide" => {
        let window = app.get_window("main").unwrap();
        window.hide().unwrap();
      }
      "settings" => {
        show_window(app);
        app.emit_to("main", "tray-settings", ()).unwrap();
      }
      _ => {}
    },
    _ => {}
  }
}
