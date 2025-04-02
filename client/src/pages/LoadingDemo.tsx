import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Helmet } from 'react-helmet';

export default function LoadingDemo() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Helmet>
        <title>Loading Spinners - St. Louis Dryer Vent Cleaning</title>
        <meta name="description" content="Demonstration of St. Louis themed loading spinners" />
      </Helmet>
      
      <h1 className="text-3xl font-bold mb-8 text-center">St. Louis Themed Loading Spinners</h1>
      <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600">
        Custom loading spinners inspired by famous St. Louis landmarks and icons. 
        Use these to provide visual feedback during async operations across the site.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Gateway Arch Spinner */}
        <Card>
          <CardHeader>
            <CardTitle>Gateway Arch</CardTitle>
            <CardDescription>Inspired by St. Louis' iconic arch monument</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-6">
            <LoadingSpinner variant="arch" size="lg" text="Loading..." />
            <div className="flex items-center space-x-4">
              <LoadingSpinner variant="arch" size="sm" />
              <LoadingSpinner variant="arch" size="md" />
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-sm w-full">
              <code>{"<LoadingSpinner variant=\"arch\" size=\"md\" text=\"Loading...\" />"}</code>
            </div>
          </CardContent>
        </Card>
        
        {/* Riverboat Spinner */}
        <Card>
          <CardHeader>
            <CardTitle>Mississippi Riverboat</CardTitle>
            <CardDescription>Inspired by the historic riverboats of St. Louis</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-6">
            <LoadingSpinner variant="riverboat" size="lg" text="Loading..." />
            <div className="flex items-center space-x-4">
              <LoadingSpinner variant="riverboat" size="sm" />
              <LoadingSpinner variant="riverboat" size="md" />
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-sm w-full">
              <code>{"<LoadingSpinner variant=\"riverboat\" size=\"md\" text=\"Loading...\" />"}</code>
            </div>
          </CardContent>
        </Card>
        
        {/* Clock Tower Spinner */}
        <Card>
          <CardHeader>
            <CardTitle>Union Station Clock Tower</CardTitle>
            <CardDescription>Inspired by the historic Union Station clock tower</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-6">
            <LoadingSpinner variant="clocktower" size="lg" text="Loading..." />
            <div className="flex items-center space-x-4">
              <LoadingSpinner variant="clocktower" size="sm" />
              <LoadingSpinner variant="clocktower" size="md" />
            </div>
            <div className="bg-gray-100 p-4 rounded-md text-sm w-full">
              <code>{"<LoadingSpinner variant=\"clocktower\" size=\"md\" text=\"Loading...\" />"}</code>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Usage Example</h2>
        <div className="bg-gray-100 p-4 rounded-md text-sm">
          <pre className="overflow-x-auto">
{`import { LoadingSpinner } from '@/components/ui/loading-spinner';

// Basic usage
<LoadingSpinner />

// With custom variant and size
<LoadingSpinner variant="arch" size="lg" />

// With loading text
<LoadingSpinner variant="riverboat" text="Loading your content..." />

// Inside a centered container
<div className="flex items-center justify-center h-64">
  <LoadingSpinner variant="clocktower" text="Please wait..." />
</div>`}
          </pre>
        </div>
      </div>
    </div>
  );
}