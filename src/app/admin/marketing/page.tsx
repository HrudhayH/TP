
"use client";

import React, { useState } from "react";
import { generateMarketingCopy, type GenerateMarketingCopyOutput } from "@/ai/flows/generate-marketing-copy";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Sparkles } from "lucide-react";

export default function MarketingAdminPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateMarketingCopyOutput | null>(null);
  const [formData, setFormData] = useState({
    productName: "Premium Aged Basmati Rice",
    category: "Rice",
    keyFeatures: "extra long grain, Himalayan water-fed, 2-year aged, aromatic",
    targetRegion: "Middle East",
    purpose: "website product page",
    length: "medium" as const,
  });

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const output = await generateMarketingCopy({
        type: "product",
        details: {
          productName: formData.productName,
          category: formData.category,
          keyFeatures: formData.keyFeatures,
        },
        targetRegion: formData.targetRegion,
        purpose: formData.purpose,
        length: formData.length,
      });
      setResult(output);
    } catch (error) {
      console.error("Failed to generate copy", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-headline text-primary">AI Content Refinement Tool</h1>
          <p className="text-muted-foreground font-body">Use Vriksa's AI engine to generate and refine regionalized marketing copy.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="font-headline">Input Details</CardTitle>
              <CardDescription>Specify product attributes and target market.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input 
                  id="name" 
                  value={formData.productName} 
                  onChange={(e) => setFormData({...formData, productName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="region">Target Region</Label>
                <Select value={formData.targetRegion} onValueChange={(v) => setFormData({...formData, targetRegion: v})}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Middle East">Middle East</SelectItem>
                    <SelectItem value="Europe">Europe</SelectItem>
                    <SelectItem value="North America">North America</SelectItem>
                    <SelectItem value="Global">Global</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="features">Key Features</Label>
                <Textarea 
                  id="features" 
                  className="min-h-[100px]"
                  value={formData.keyFeatures} 
                  onChange={(e) => setFormData({...formData, keyFeatures: e.target.value})}
                />
              </div>
              <Button 
                onClick={handleGenerate} 
                disabled={loading}
                className="w-full bg-accent text-white hover:bg-accent/90"
              >
                {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2" />}
                Generate Marketing Copy
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {result ? (
              <Card className="border-accent/20 border-2 bg-white shadow-xl animate-in zoom-in-95 duration-500">
                <CardHeader className="bg-accent/5">
                  <CardTitle className="font-headline text-accent">AI Generated Content</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label className="text-xs uppercase tracking-widest text-muted-foreground">Headline</Label>
                    <p className="text-xl font-headline text-primary">{result.headline}</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs uppercase tracking-widest text-muted-foreground">Body Copy</Label>
                    <p className="text-sm leading-relaxed text-primary/80">{result.body}</p>
                  </div>
                  {result.callToAction && (
                    <div className="space-y-2">
                      <Label className="text-xs uppercase tracking-widest text-muted-foreground">Call to Action</Label>
                      <p className="text-sm font-medium text-accent">{result.callToAction}</p>
                    </div>
                  )}
                  <div className="pt-4 border-t border-muted">
                    <Label className="text-xs uppercase tracking-widest text-muted-foreground">Nuance Notes (AI Insight)</Label>
                    <p className="text-xs italic text-muted-foreground mt-1">{result.nuanceNotes}</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="h-full flex items-center justify-center border-2 border-dashed rounded-xl p-12 text-center text-muted-foreground">
                <p>Fill out the details and click generate to see AI insights.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
