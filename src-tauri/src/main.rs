#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod system;

use system::tray;
use tauri::Manager;
use window_shadows::set_shadow;

fn main() {
  let system_tray = tray::new();

  tauri::Builder::default()
    .setup(|app| {
      let handle = app.handle();
      let window = handle.get_window("main").unwrap();
      set_shadow(&window, true).expect("Failed to set shadow");

      window.listen("web/created-video", move |event| {
        let window = handle.get_window(event.payload().unwrap()).unwrap();
        set_shadow(&window, true).expect("Failed to set shadow");
      });

      Ok(())
    })
    .system_tray(system_tray)
    .on_system_tray_event(tray::config)
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
