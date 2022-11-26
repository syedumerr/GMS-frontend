import React, { useMemo } from "react";
import objectPath from "object-path";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { Topbar } from "./Topbar";
import { HeaderMenuWrapper } from "./header-menu/HeaderMenuWrapper";
import { AnimateLoading } from "../../../_partials/controls";

export function Header() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      headerClasses: uiService.getClasses("header", true),
      headerAttributes: uiService.getAttributes("header"),
      headerContainerClasses: uiService.getClasses("header_container", true),
      menuHeaderDisplay: objectPath.get(
        uiService.config,
        "header.menu.self.display"
      ),
    };
  }, [uiService]);

  return (
    <>
      {/*begin::Header*/}
      {/*begin::Container*/}
      <div
        className={`header ${layoutProps.headerClasses}`}
        id="kt_header"
        {...layoutProps.headerAttributes}
      >
        <div
          className={` ${layoutProps.headerContainerClasses} d-flex align-items-stretch justify-content-between`}
        >
          <AnimateLoading />
          {layoutProps.menuHeaderDisplay && <HeaderMenuWrapper />}
          {!layoutProps.menuHeaderDisplay && <div />}

          <Topbar />
        </div>
      </div>
      {/*begin::Header Menu Wrapper*/}
      {/*end::Header Menu Wrapper*/}
      {/*begin::Topbar*/}
      {/*end::Topbar*/}
      {/*end::Container*/}
      {/*end::Header*/}
    </>
  );
}
