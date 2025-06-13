"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { useState } from "react";

export function Tabs({ defaultValue, className, children, ...props }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  // Filter children to find TabsList and TabsContent
  const tabsList = children.find((child) => child.type === TabsList);
  const tabsContent = children.find((child) => child.type === TabsContent);

  // Clone TabsList with activeTab and setActiveTab
  const clonedTabsList = tabsList
    ? React.cloneElement(tabsList, { activeTab, setActiveTab })
    : null;

  // Clone TabsContent with activeTab
  const clonedTabsContent = tabsContent
    ? React.cloneElement(tabsContent, { activeTab })
    : null;

  return (
    <div className={cn("space-y-2", className)} {...props}>
      {clonedTabsList}
      {children.filter(
        (child) => child.type !== TabsList && child.type !== TabsContent
      )}
      {clonedTabsContent}
    </div>
  );
}

export function TabsList({
  className,
  children,
  activeTab,
  setActiveTab,
  ...props
}) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            active: child.props.value === activeTab,
            onClick: () => setActiveTab(child.props.value),
          });
        }
        return child;
      })}
    </div>
  );
}

export function TabsTrigger({ className, value, active, children, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        active
          ? "bg-background text-foreground shadow-sm"
          : "hover:bg-muted hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  className,
  value,
  activeTab,
  children,
  ...props
}) {
  if (value !== activeTab) return null;

  return (
    <div
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
